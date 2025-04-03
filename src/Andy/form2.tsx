
function AndysForm() {
    return (
        <form>
            <label htmlFor="name">Enter your Name</label>
            <input type="text" id="name" />
            <br /><br />

            <label htmlFor="burgertype">Burger Cooking Preference</label>
            <input type="text" id="burgertype" />
            <br /><br />

            <h3>Toppings</h3>
            <input type="checkbox" id="tomatoes" />
            <label htmlFor="tomatoes">Tomato</label>
            <br />
            <input type="checkbox" id="lettuce" />
            <label htmlFor="lettuce">Lettuce</label>
            <br />
            <input type="checkbox" id="pickles" />
            <label htmlFor="pickles">Pickles</label>
            <br />

            <h3>Choose Burger Size</h3>
            <input type="radio" id="small" name="burgerSize" />
            <label htmlFor="small">Small</label>
            <br />
            <input type="radio" id="medium" name="burgerSize" />
            <label htmlFor="medium">Medium</label>
            <br />
            <input type="radio" id="large" name="burgerSize" />
            <label htmlFor="large">Large</label>
            <br /><br />

            <label htmlFor="comments">Additional Comments</label>
            <textarea rows="2" cols="50" id="comments"></textarea>
            <br /><br />

            <label htmlFor="beverages">Choose your Drink</label>
            <select id="beverages" name="beverages">
                <option value="water">Water</option>
                <option value="orangejuice">Orange Juice</option>
                <option value="coke">Coke</option>
            </select>
            <br /><br />

            <button type="submit">Submit</button>
        </form>
    );
}

export default AndysForm;
