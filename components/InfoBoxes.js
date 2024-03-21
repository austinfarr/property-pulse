import React from "react";
import InfoBox from "./InfoBox";

const InfoBoxes = () => {
  return (
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <InfoBox
            heading="For Renters"
            backgroundColor="bg-gray-100"
            textColor="text-gray-800"
            buttonInfo={{
              link: "/properties",
              backgroundColor: "bg-black",
              text: "Browse Properties",
            }}
          >
            Find the perfect property that suits your needs.
          </InfoBox>
          <InfoBox
            heading="For Property Owners"
            backgroundColor="bg-blue-100"
            buttonInfo={{
              link: "/properties/add",
              backgroundColor: "bg-blue-500",
              text: "Add Property",
            }}
          >
            Add your property to our database and reach more renters.
          </InfoBox>
        </div>
      </div>
    </section>
  );
};

export default InfoBoxes;
