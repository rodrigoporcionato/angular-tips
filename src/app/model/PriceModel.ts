
export class PriceGroupModel {
  StoreGroup: string;
  PriceFirstRow: PriceModel;
  priceListGroup: PriceModel[];

  constructor(storeGroup: string, priceFirstRow: PriceModel, priceListGroup: PriceModel[] ) {
    this.StoreGroup = storeGroup;
    this.PriceFirstRow = priceFirstRow;
    this.priceListGroup = priceListGroup;
  }
}

export class PriceModel {
    Id: number;
    StoreName: string;
    SellerName: string;
    BilletPrice: number;
    PriceFrom: number;
    Price: number;
    PriceWithInstallments: number;
    PriceWithInstallmentsQty: number;
    PriceWithInstallmentsPrice: number;
    PriceWithInstallmentsTax: number;
    PriceWithoutInstallments: number;
    PriceWithoutInstallmentsQty: number;
    PriceWithoutInstallmentsPrice: number;
    PrivatePriceWithInstallments: number;
    PrivatePriceWithInstallmentsQty: number;
    PrivatePriceWithInstallmentsPrice: number;
    PrivatePriceWithInstallmentsTax: number;
    PrivatePriceWithoutInstallments: number;
    PrivatePriceWithoutInstallmentsQty: number;
    PrivatePriceWithoutInstallmentsPrice: number;
    CreateAt: Date;
  constructor
  (
    Id: number,
    StoreName: string,
    SellerName: string,
    BilletPrice: number,
    PriceFrom: number,
    Price: number,
    PriceWithInstallments: number,
    PriceWithInstallmentsQty: number,
    PriceWithInstallmentsPrice: number,
    PriceWithInstallmentsTax: number,
    PriceWithoutInstallments: number,
    PriceWithoutInstallmentsQty: number,
    PriceWithoutInstallmentsPrice: number,
    PrivatePriceWithInstallments: number,
    PrivatePriceWithInstallmentsQty: number,
    PrivatePriceWithInstallmentsPrice: number,
    PrivatePriceWithInstallmentsTax: number,
    PrivatePriceWithoutInstallments: number,
    PrivatePriceWithoutInstallmentsQty: number,
    PrivatePriceWithoutInstallmentsPrice: number,
    CreateAt: Date
  ) {
    this.Id = Id;
    this.StoreName = StoreName;
    this.SellerName = SellerName;
    this.BilletPrice = BilletPrice;
    this.PriceFrom = PriceFrom;
    this.Price = Price;
    this.PriceWithInstallments = PriceWithInstallments;
    this.PriceWithInstallmentsQty = PriceWithInstallmentsQty;
    this.PriceWithInstallmentsPrice = PriceWithInstallmentsPrice;
    this.PriceWithInstallmentsTax = PriceWithInstallmentsTax;
    this.PriceWithoutInstallments = PriceWithoutInstallments;
    this.PriceWithoutInstallmentsQty = PriceWithoutInstallmentsQty;
    this.PriceWithoutInstallmentsPrice = PriceWithoutInstallmentsPrice;

    this.PrivatePriceWithInstallments = PrivatePriceWithInstallments;
    this.PrivatePriceWithInstallmentsQty = PrivatePriceWithInstallmentsQty;
    this.PrivatePriceWithInstallmentsPrice = PrivatePriceWithInstallmentsPrice;
    this.PrivatePriceWithInstallmentsTax = PrivatePriceWithInstallmentsTax;
    this.PrivatePriceWithoutInstallments = PrivatePriceWithoutInstallments;
    this.PrivatePriceWithoutInstallmentsQty = PrivatePriceWithoutInstallmentsQty;
    this.PrivatePriceWithoutInstallmentsPrice = PrivatePriceWithoutInstallmentsPrice;

    this.CreateAt = CreateAt;
  }

}
