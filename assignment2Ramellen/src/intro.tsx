type nameProp = {
    fullName: string
}
function IntroR(props: nameProp) {

    return (
        <p><i>Hello, my name is {props.fullName}. in this assignment we had to utilize React to recreate our previous webpage.
            Anyways, to reiterate, I like outdoor hobbies, and especially running. The following list details
            some of my favorite things.</i></p>
    )
}


export default IntroR;