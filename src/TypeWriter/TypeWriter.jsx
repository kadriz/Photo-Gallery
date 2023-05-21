
import Typewriter from 'typewriter-effect'
import './TypeWriter.css'
function TypeWriter() {
  return (
    <div className='typewriter'>
<Typewriter
   options ={{
    loop : true ,
    delay: 80,
    autoStart:true,
    strings : ["No photos to show please enter your search term"]
   }}
/> 

</div>
 )
}
export default TypeWriter