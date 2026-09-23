import { useParams } from "react-router"

const DynamicPricing = () => {
    const { id } = useParams();    
  return (
    <div>Our product Id: {id}</div>
  )
}

export default DynamicPricing