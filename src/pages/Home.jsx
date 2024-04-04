import { useState, useEffect } from "react"
import AddTutorial from "../components/AddTutorial"
import TutorialList from "../components/TutorialList"
import axios from "axios"

const Home = () => {
  const [tutorials, setTutorials] = useState([])

  const getTutorials = async () => {
    // const URL = "https://tutorial-api.fullstack.clarusway.com/tutorials/"
    try {
      const res = await axios(process.env.REACT_APP_URL)
      console.log(res.data)
      setTutorials(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  //? componentDidMount (ilk render sonrasi bir kere istek gonder)
  useEffect(() => {
    getTutorials()
  }, [])

  return (
    <>
      <AddTutorial getTutorials={getTutorials} />
      <TutorialList tutorials={tutorials} />
    </>
  )
}

export default Home
