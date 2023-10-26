export type Project = {
  source: string,
  num_of_records: number,
  feeds: Feed[]
}

export type Feed = {
  device_id: string;
  gps_lat: string;
  gps_lon: string;
  timestamp: string;
};