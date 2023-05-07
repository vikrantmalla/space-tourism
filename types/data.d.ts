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
  }
}

export = Data;
