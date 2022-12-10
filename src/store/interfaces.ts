export interface AccountInfoInterface {
  name: string
  email: string
  password: string
  shop_token?: string
  google_token?: string
}

export interface shopifyStoreInterface {
  shop_logo_url: string
  shop_name: string
  token: string
  status: string
}
