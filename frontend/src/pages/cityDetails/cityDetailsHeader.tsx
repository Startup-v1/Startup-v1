type Props = { photoUrl: string };

export const CityDetailsHeader = ({ photoUrl }: Props) => (
  <div
    className="h-96 bg-cover bg-center"
    style={{ backgroundImage: `url(${photoUrl})` }}
  ></div>
);
