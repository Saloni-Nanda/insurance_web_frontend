import { Helmet } from "react-helmet-async"
import ServiceSection from "../../components/ServiceSection/ServiceSection"

const Service = () => {
  return (
    <div>
      <Helmet>
        <title>Insurance Recruitment Services | RBG HR Services LLP</title>
        <meta
          name="description"
          content="Exclusive manpower placement and leadership hiring
solutions for the insurance sector. Retainer-based executive search at
just 10% of the standard cost.
      "
        />;
      </Helmet>
      <ServiceSection />

    </div>
  )
}

export default Service
