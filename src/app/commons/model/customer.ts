export class Customer {
  constructor(
    public name: string = '',
    public address: string = '',
    public creditCard: string = '',
    public autreValeur: string = ''
  ) {}

  static build(customer: Customer) {
    return new Customer(
      customer.name,
      customer.address,
      customer.creditCard,
      customer.autreValeur
    );
  }
}
