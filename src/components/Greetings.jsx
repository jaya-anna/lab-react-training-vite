
function Greetings(props) {
  const {lang, children} = props

  switch (lang) {
case 'fr': 
return <b>Bonjour, {children}!</b>


case 'de': 
return <b>Hallo, {children}!</b>


default: 
return`Hello, ${children}!`
  }
  
}


export default Greetings