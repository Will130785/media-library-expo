export interface IMediaPayloadData {
  title: string
  mediatype: string
  releasedate: string
  barcode: string
  imageurl: string
  notes: string
}

export interface IMediaItem extends IMediaPayloadData {
  id: string
}
