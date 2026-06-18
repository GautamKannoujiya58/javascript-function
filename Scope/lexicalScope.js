// Why This Matters For React

// When you write:

function App() {

    const username = "Gautam";

    const handleClick = () => {
        console.log(username);
    };

    return (
        <button onClick={handleClick}>
            Click
        </button>
    );
}

/* Why can:

handleClick()

access:

username

even after React finishes rendering?

Because of the exact same scope rule you're learning right now.
*/



/*Lexical Scope

or

Static Scope

Meaning:

A function remembers where it was defined, not where it was called.*/


/* The Golden Rule

A function remembers:

Where it was defined

NOT

Where it was called

This single sentence explains:

Closures
React Hooks
Event Handlers
Callbacks

all later.
*/