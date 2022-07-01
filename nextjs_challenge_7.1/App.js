import { useForm } from "react-hook-form";

export default function IndexPage() {
  return (
    <form>
      Name : <input></input> <br />
      Email : <input placeholder="Only @naver.com"></input> <br />
      Password : <input placeholder="Min 10 characters"></input> <br />
      <input type="submit" value="Log in"/>
    </form>
  )
}
