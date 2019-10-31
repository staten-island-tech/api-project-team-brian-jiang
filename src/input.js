export function getUserInput(){
    document.getElementById('submit').addEventListener('click', () => {
        const userInput = document.getElementById('user_input').value;
        console.log (userInput);
    })
}