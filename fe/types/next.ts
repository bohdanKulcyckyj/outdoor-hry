export type PageSearchParams = { [key: string]: string | string[] | undefined }
export type PageParams = { slug: string }
export type PageProps = { 
  params: PageParams,
  searchParams: PageSearchParams
}