export function getUserInput(){
    document.getElementById('user_submit').addEventListener('click', () => {
        const userInput = document.getElementById('user_input');
        console.log (userInput);
    })
}