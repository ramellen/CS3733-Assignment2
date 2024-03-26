function formR() {
    return(
        <form>
            <label htmlFor="fname">First name:</label><br/>
            <input type="text" id="fname" name="fname"/><br/>
            <label htmlFor="lname">Last name:</label><br/>
            <input type="text" id="lname" name="lname"/><br></br>
            <p></p>
            <input type="checkbox" id="dogs" name="dogs"/>
            <label htmlFor="dogs">I own a dog</label>
            <input type="checkbox" id="cats" name="cats"/>
            <label htmlFor="cats">I own a cat</label><br></br>
            <p></p>
            <p>Ok, now what's your favorite color?</p>
            <input type="radio" id="green" name="fav_color" value="GREEN"/>
            <label htmlFor="green">GREEN</label>
            <input type="radio" id="red" name="fav_color" value="RED"/>
            <label htmlFor="red">RED</label>
            <input type="radio" id="blue" name="fav_color" value="BLUE"/>
            <label htmlFor="blue">BLUE</label><br></br>
            <p></p>
            <input type="submit" value="Submit"/>
        </form>
    )
}

export default formR;