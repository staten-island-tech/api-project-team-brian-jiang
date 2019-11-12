export function animInit(){
    document.querySelectorAll('.trivia_answer_choice').forEach(el => {
        el.addEventListener('mouseover', el => {
            el.target.style.transform = 'scale(1.1, 1.1)';
            el.target.style.transition = '.5s';
        }); 
    });
    document.querySelectorAll('.trivia_answer_choice').forEach(el => {
        el.addEventListener('mouseout', el => {
            el.target.style.transform = 'scale(1, 1)';
            el.target.style.transition = '.5s';
        }); 
    });
}

export function typewriterQ(){
    function setupTypewriter(t) {
        var HTML = t.innerHTML;

        t.innerHTML = "";

        var cursorPosition = 0,
            tag = "",
            writingTag = false,
            tagOpen = false,
            typeSpeed = 100,
        tempTypeSpeed = 0;

        var type = function() {
        
            if (writingTag === true) {
                tag += HTML[cursorPosition];
            }

            if (HTML[cursorPosition] === "<") {
                tempTypeSpeed = 0;
                if (tagOpen) {
                    tagOpen = false;
                    writingTag = true;
                } else {
                    tag = "";
                    tagOpen = true;
                    writingTag = true;
                    tag += HTML[cursorPosition];
                }
            }
            if (!writingTag && tagOpen) {
                tag.innerHTML += HTML[cursorPosition];
            }
            if (!writingTag && !tagOpen) {
                if (HTML[cursorPosition] === " ") {
                    tempTypeSpeed = 0;
                }
                else {
                    tempTypeSpeed = (Math.random() * typeSpeed) + 50;
                }
                t.innerHTML += HTML[cursorPosition];
            }
            if (writingTag === true && HTML[cursorPosition] === ">") {
                tempTypeSpeed = (Math.random() * typeSpeed) + 50;
                writingTag = false;
                if (tagOpen) {
                    var newSpan = document.createElement("span");
                    t.appendChild(newSpan);
                    newSpan.innerHTML = tag;
                    tag = newSpan.firstChild;
                }
            }

            cursorPosition += 1;
            if (cursorPosition < HTML.length - 1) {
                setTimeout(type, tempTypeSpeed);
            }

        };

        return {
            type: type
        };
    }

    var typer = document.querySelector('.trivia_question');

    let typewriter = setupTypewriter(typer);

    typewriter.type();
    }  
    export function typewriterA(el){
        function setupTypewriter(t) {
            var HTML = t.innerHTML + '/';
    
            t.innerHTML = "";
    
            var cursorPosition = 0,
                tag = "",
                writingTag = false,
                tagOpen = false,
                typeSpeed = 100,
            tempTypeSpeed = 0;
    
            var type = function() {
            
                if (writingTag === true) {
                    tag += HTML[cursorPosition];
                }
    
                if (HTML[cursorPosition] === "<") {
                    tempTypeSpeed = 0;
                    if (tagOpen) {
                        tagOpen = false;
                        writingTag = true;
                    } else {
                        tag = "";
                        tagOpen = true;
                        writingTag = true;
                        tag += HTML[cursorPosition];
                    }
                }
                if (!writingTag && tagOpen) {
                    tag.innerHTML += HTML[cursorPosition];
                }
                if (!writingTag && !tagOpen) {
                    if (HTML[cursorPosition] === " ") {
                        tempTypeSpeed = 0;
                    }
                    else {
                        tempTypeSpeed = (Math.random() * typeSpeed) + 50;
                    }
                    t.innerHTML += HTML[cursorPosition];
                }
                if (writingTag === true && HTML[cursorPosition] === ">") {
                    tempTypeSpeed = (Math.random() * typeSpeed) + 50;
                    writingTag = false;
                    if (tagOpen) {
                        var newSpan = document.createElement("span");
                        t.appendChild(newSpan);
                        newSpan.innerHTML = tag;
                        tag = newSpan.firstChild;
                    }
                }
    
                cursorPosition += 1;
                if (cursorPosition < HTML.length - 1) {
                    setTimeout(type, tempTypeSpeed);
                }
    
            };
    
            return {
                type: type
            };
        }
    
        var typer = el;
    
        let typewriter = setupTypewriter(typer);
    
        typewriter.type();
        }  