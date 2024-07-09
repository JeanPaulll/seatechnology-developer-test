/**
 * @author Jean Paul <jeanpaulwebb@gmail.com>
 * @date 05/07/2024
 * Utils
 */
export function formatCpf(cpf: string): string {
    const formattedCPF = cpf.replace(/\D/g, "");
    if (formattedCPF.length !== 11) {
        throw new Error("CPF inválido. O CPF deve conter 11 dígitos.");
    }
    const part1 = formattedCPF.slice(0, 3);
    const part2 = formattedCPF.slice(3, 6);
    const part3 = formattedCPF.slice(6, 9);
    const part4 = formattedCPF.slice(9);
    return `${part1}.${part2}.${part3}-${part4}`;
}

/**
 * @description Formata o RG no padrão XX.XXX.X-X
 * @param rg
 */
export function formatRG(rg: string): string {
    const cleanRG = rg.replace(/\D/g, '');
    if (cleanRG.length !== 7) {
        return rg;
    }
    return `${cleanRG.slice(0, 2)}.${cleanRG.slice(2, 5)}.${cleanRG.slice(5, 6)}-${cleanRG.slice(6)}`;
}