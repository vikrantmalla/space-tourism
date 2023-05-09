declare namespace Data {
  declare namespace PageData {
    interface Home {
      id: string;
      heading: string;
      subheading: string;
      description: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    }

    interface IndexPageData {
      homes: Home[];
    }

    interface Dest {
      id: string;
      subheading: string;
      destinationData: DestinationData
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    }

    interface DestinationData {
      destinations: Destination[]
    }
    
    interface Destination {
      name: string
      travel: string
      distance: string
      description: string
    }

    interface DestinationPageData {
      destinations: Dest[];
    }
  }
}

export = Data;
