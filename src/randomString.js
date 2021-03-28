const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const max = 15
const min = 3;
export default function generateString() {
    let result = ' ';
    const charactersLength = characters.length;
    const randomLength = Math.floor(Math.random() * (max - min + 1) + min);

    for (let i = 0; i < randomLength; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}
