import React, {useCallback, useEffect} from 'react';
import './App.scss';
import {useDispatch, useSelector} from 'react-redux';
import {
    getActivities,
    getActivitiesWorkers,
    getCompanies,
    getEquipments,
    getRoles,
    getWorkers
} from './store/actions/company';
import {AnyAction, ThunkDispatch} from '@reduxjs/toolkit';
import AppRoutes from './router';
import {Layout} from 'antd';

type AppDispatch = ThunkDispatch<RootState, void, AnyAction>;

/**
 * @constructor
 * @author Jean Paul <jeanpaulwebb@gmail.com>
 * @date 05/07/2024
 * App
 */
function App() {
    const dispatch: AppDispatch = useDispatch();
    const {list, isLoading} = useSelector((state: RootState) => state.company);
    const loadCompanies = useCallback(async () => {
        if (list.length === 0) {
            await dispatch(getCompanies());
            await dispatch(getWorkers());
            await dispatch(getActivities());
            await dispatch(getEquipments());
            await dispatch(getRoles());
            await dispatch(getActivitiesWorkers());
        }
    }, [dispatch, list]);
    useEffect(() => {
        loadCompanies();
    }, [loadCompanies]);
    return (
        <Layout style={{paddingLeft: '57px'}}>
            {!isLoading && <AppRoutes/>}
        </Layout>
    );
}

export default App;
