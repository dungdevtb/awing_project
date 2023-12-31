export interface Campaign {
  information: {
    name: string;
    describe?: string;
  };

  subCampaigns: [
    {
      name: string;
      status: boolean;
      sum?: number;
      ads: [
        {
          id?: number;
          name: string;
          quantity: number;
        }
      ];
    }
  ];
}

export interface SubCampaigns {
  name: string;
  status: boolean;
  sum?: number;
  ads: [
    {
      id?: number;
      name: string;
      quantity: number;
    }
  ];
}

export interface FormValidate {
  name: {
    error: boolean;
    errorMessage: string;
  };
}
