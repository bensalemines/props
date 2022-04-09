

const PROFILE = (props) => {
  const fName= props.fName;
  const profession = props.profession;
  const bio = props.bio;
  return (
    <div className="p">
<h1>{fName}</h1>
<h3>{profession}</h3>
{props.children}
<p>{bio}</p>
 {props.handleName(fName)}
    </div>
  )
}

export default PROFILE