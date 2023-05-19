import React from 'react'
import { getDestinationPageData } from '@/service/destinationpage';
import { PageData } from '@/types/data';
import Destination from '@/components/Destination';


export const getStaticProps = async () => {
    const destinations: PageData.DestinationPageData  = await getDestinationPageData();
    return {
      props: { destinations }
    };
  };

const destination = ({destinations}: PageData.DestinationPageData) => {
  return (
    <>
    <Destination destinations={destinations}/>
    </>
  )
}

export default destination