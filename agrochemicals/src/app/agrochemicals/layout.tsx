import utilityObject from "../../../various/various"

export default function AgrochemicalsLayout({
    children,
    
  }: {
    children: React.ReactNode
  }) {

const {crops, categories, insect, fungus, herb} = utilityObject

    return (
      <div>
        <form >
  <label >Επιλέξτε καλλιέργεια</label>
  <select name="crops" id="crops">
  {crops.map((crop : string) => {
      return <option value={crop}>{crop}</option>
    })}    
  </select> 
  <label >Επιλέξτε κατηγορία φαρμάκου:</label>
  <select name="categories" id="categories">
  {categories.map((category : string) => {
      return <option value={category}>{category}</option>
    })}    
  </select>
  <label >Επιλέξτε εχθρό</label>
  <select name="insect" id="insect">
  {insect.map((ins : string) => {
      return <option value={ins}>{ins}</option>
    })}    
  </select> 
  <label >Επιλέξτε ζιζάνιο στόχο</label>
  <select name="herb" id="herb">
  {herb.map((hrb : string) => {
      return <option value={hrb}>{hrb}</option>
    })}    
  </select> 
  <label >Επιλέξτε ασθένεια</label>
  <select name="fungus" id="fungus">
  {fungus.map((fung : string) => {
      return <option value={fung}>{fung}</option>
    })}    
  </select> 
  <input type="submit" value="Submit"/>
</form>
<div>
    {children}
</div>
      </div>
    )
  }
  