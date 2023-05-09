import React from 'react'
import { getDestinationPageData } from '@/service/destinationpage';
import { PageData } from '@/types/data';


export const getStaticProps = async () => {
    const destinations: PageData.DestinationPageData  = await getDestinationPageData();
    return {
      props: { destinations }
    };
  };

const destination = ({destinations}: PageData.DestinationPageData) => {
  return (
    <div>destination</div>
  )
}

export default destination