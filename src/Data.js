const questions = [
    {
      text: "During the mounting phase of a React component lifecycle,which method call first",
      options: [
        { id: 0, opt: "a", text: "Constructor", isCorrect: true },
        { id: 1, opt: "b", text: "ComponentDidMount", isCorrect: false },
        { id: 2, opt: "c", text: "ComponentWillUnMount", isCorrect: false },
        { id: 3, opt: "d", text:"render", isCorrect: false }
      ]
    },
    {
      text: "What Happens if u dont call preventDefault() in an event handler when clicking ina link",
      options: [
        { id: 0, opt: "a", text: "An error will be thrown", isCorrect: false },
        { id: 1, opt: "b", text: "The link's deafult behaviour,its rediect to a new page", isCorrect: true },
        { id: 2, opt: "c", text: "The link will be disabled", isCorrect: false },
        { id: 3, opt: "d", text: "The link will open in newtab", isCorrect: false }
      ]
    },
    {
      text: "In Reactclass component,which method should use to change the value of state",
      options: [
        { id: 0, opt: "a", text: "this.state=newvalue", isCorrect: false },
        { id: 1, opt: "b", text: "this.updateState(newvalue)", isCorrect: false },
        { id: 2, opt: "c", text: "this.setState({newValue})", isCorrect: true },
        { id: 3, opt: "d", text: "this.state.updateState(newValue)", isCorrect: false }
      ]
    },
    {
        text: "What happens when u update th state directly in react,like this 'this.state.count=this.state.count+1;'",
        options: [
          { id: 0, opt: "a", text: "it updates the state correctly", isCorrect: false },
          { id: 1, opt: "b", text: "it triggers a re-render", isCorrect: false },
          { id: 2, opt: "c", text: "it causes runtime error", isCorrect: true },
          { id: 3, opt: "d", text: "its the recommended way to update state", isCorrect: false }
        ]
      },
      {
        text: "what does the useState Hook will return",
        options: [
          { id: 0, opt: "a", text: "The current state value", isCorrect: false },
          { id: 1, opt: "b", text: "The current state value and the function to update it", isCorrect: true },
          { id: 2, opt: "c", text: "The new state value", isCorrect: false },
          { id: 3, opt: "d", text: "An object containing the state and its update function", isCorrect: false }
        ]
      },
      {
        text: "Which Method is used to remove an HTML element from the DOM in javascript",
        options: [
          { id: 0, opt: "a", text: "removechild()", isCorrect: true },
          { id: 1, opt: "b", text: "deleteElement()", isCorrect: false },
          { id: 2, opt: "c", text: "removeElement()", isCorrect: false },
          { id: 3, opt: "d", text:"destroyElement()", isCorrect: false }
        ]
      },
      {
        text: "Which event is triggered when an element id double clicked",
        options: [
          { id: 0, opt: "a", text: "onMouseDouble", isCorrect: false },
          { id: 1, opt: "b", text: "onDblClick", isCorrect: true },
          { id: 2, opt: "c", text: "onMouseDoubleClick", isCorrect: false },
          { id: 3, opt: "d", text:"onDoubleClick", isCorrect: false }
        ]
      },
      {
        text: "The setTimeout()belongs to which object",
        options: [
          { id: 0, opt: "a", text: "event", isCorrect: false },
          { id: 1, opt: "b", text: "element", isCorrect: false },
          { id: 2, opt: "c", text: "location", isCorrect: false },
          { id: 3, opt: "d", text:"window", isCorrect: true }
        ]
      },
      {
        text: "Which JS Method used to make asynchronus API calls and handle responses",
        options: [
          { id: 0, opt: "a", text: "asyncAPI()", isCorrect: false },
          { id: 1, opt: "b", text: "sendRequest()", isCorrect: false },
          { id: 2, opt: "c", text: "fetch()", isCorrect: true },
          { id: 3, opt: "d", text: "callAPI()", isCorrect: false }
        ]
      },
      {
        text: "Which of the following is NOT a common HTTP request method used in API interactions",
        options: [
          { id: 0, opt: "a", text: "PATCH", isCorrect: false },
          { id: 1, opt: "b", text: "SEARCH", isCorrect: true },
          { id: 2, opt: "c", text: "TRACE", isCorrect: false },
          { id: 3, opt: "d", text:"HEAD", isCorrect: false }
        ]
      }
      

  ];

export default questions;  