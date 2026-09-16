export type SeasonOne = { openingCash:number; sold:number; price:number; milkTons:number; milkPrice:number; maintenance:number; depreciation:number; transport:number; market:number; salaries:number; rent:number; machinePurchase:number; bonusRate:number; taxRate:number }
export type Strategy = { name:string; production:number; milkTons:number; milkPrice:number; yieldPerTon:number; salesRequest:number; actualSales:number; market:number; rent:number; transportPerUnit:number; capacity:number; maintenance:number; depreciation:number; salaries:number; borrowing:number; interestRate:number; principalRepayment:number }
const round = (value:number) => Math.round(value)
export const seasonOne: SeasonOne = { openingCash:100000, sold:50000, price:2, milkTons:2.5, milkPrice:20000, maintenance:1800, depreciation:4375, transport:5000, market:5000, salaries:10000, rent:17000, machinePurchase:35000, bonusRate:.05, taxRate:.1 }
export function calculateYearOne(x:SeasonOne) {
  const revenue=round(x.sold*x.price), milk=round(x.milkTons*x.milkPrice)
  const gross=round(revenue-milk-x.maintenance-x.depreciation), bonus=round(Math.max(0,gross*x.bonusRate))
  const beforeTax=round(gross-x.transport-x.market-bonus-x.salaries-x.rent), tax=round(Math.max(0,beforeTax*x.taxRate))
  const net=round(beforeTax-tax), closing=round(x.openingCash+revenue-x.machinePurchase-milk-x.market-x.rent-x.maintenance-x.transport-x.salaries-bonus-tax)
  return {revenue,milk,gross,bonus,beforeTax,tax,net,closing}
}
export function calculateStrategy(s:Strategy, openingCash:number, lossPool=0) {
  const actual=Math.min(Math.max(0,s.actualSales),s.production), revenue=round(actual*2), milk=round(s.milkTons*s.milkPrice)
  const interest=round(s.borrowing*s.interestRate), gross=round(revenue-milk-s.maintenance-s.depreciation)
  const transport=round(actual*s.transportPerUnit), bonus=round(Math.max(0,gross*.05))
  const beforeTax=round(gross-transport-s.market-bonus-s.salaries-s.rent-interest), lossUsed=Math.min(Math.max(0,beforeTax),lossPool)
  const tax=round(Math.max(0,beforeTax-lossUsed)*.1), net=round(beforeTax-tax)
  const prepayment=round(openingCash+s.borrowing-milk-s.market-s.rent-s.maintenance)
  const closing=round(openingCash+s.borrowing+revenue-milk-s.market-s.rent-s.maintenance-transport-s.salaries-bonus-interest-s.principalRepayment-tax)
  const flags:string[]=[]
  if(s.production>s.capacity) flags.push('Production exceeds available machine capacity.')
  if(s.production>s.milkTons*s.yieldPerTon) flags.push('Production exceeds milk available.')
  if(s.salesRequest%10000!==0) flags.push('Sales request must be in 10,000-unit blocks.')
  if(s.actualSales>s.production) flags.push('Actual sales were capped at planned production.')
  if(prepayment<0) flags.push('Cash is negative before the market.')
  if(closing<0) flags.push('Closing cash is negative.')
  return {actual,revenue,milk,interest,gross,transport,bonus,beforeTax,lossUsed,tax,net,prepayment,closing,unsold:Math.max(0,s.production-actual),unusedMilk:Math.max(0,s.milkTons-(s.production/s.yieldPerTon)),flags}
}
