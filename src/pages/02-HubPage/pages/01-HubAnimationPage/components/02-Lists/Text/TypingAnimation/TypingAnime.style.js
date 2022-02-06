import styled from "styled-components"
export const TypingAnimeStyled=styled.section`

  width: 230px;

.typewriter-text  {
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .15em solid orange; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: .15em; /* Adjust as needed */
  animation: 
    blink-caret .75s step-end infinite;
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent;color:lightblue }
  50% { border-color: orange; }
}
`


