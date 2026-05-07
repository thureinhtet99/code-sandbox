declare global {
  interface ContentType {
    attributes: {
      description: string;
      female_weight: {
        max: number;
        min: number;
      };
      hypoallergenic: boolean;
      life: {
        max: number;
        min: number;
      };
      male_weight: {
        max: number;
        min: number;
      };
      name: string;
    };
    id: string;
    relationships: {
      group: {
        data: {
          id: string;
          type: string;
        };
      };
    };
    type: string;
  }

  interface APIResponse {
    data: ContentType[];
    links: {
      current: string;
      self: string;
    };
    meta: {
      pagination: {
        current: number;
        records: number;
      };
    };
  }
}

export {};
