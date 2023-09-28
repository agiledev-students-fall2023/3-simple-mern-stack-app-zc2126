import './About.css'

/**
 * A React component that represents the Home page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const About = props => {
  return (
    <>
      <h1>Hi there</h1>
      <img src="selfphoto.jpg"></img>
      <p>My name is Jeremy and I'm a Senior studying both Computer Science and Politics at NYU. At the moment, I work for NYU's Office of Global Services and have been an IT intern in the past.</p>
      <br></br>
      <p>In my spare time, I tend to enjoy cooking as well as reading into foreign policy. From time to time I'll also try to work on a few coding projects here and there. More recently, I've managed to get into Warhammer 40k, with me still learning how to assemble and paint various minis -- the Ad Mech will be the death of me (if you know you know).</p>
    </>
  )
}

// make this component available to be imported into any other file
export default About
