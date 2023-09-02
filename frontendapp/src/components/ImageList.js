import Table from "react-bootstrap/Table";

function getTableHeaderNames() {
  return [
    "Date",
    "MinTemp",
    "Pressure",
    "Humidity",
    "Sunrise",
    "Sunset",
    "Weather",
  ];
}

const ImageList = (props) => {
  return (
    props.weatherforecast.list && (
      <Table striped hover border>
        <thead className="sticky-top bg-info text-light">
          <tr>
            {getTableHeaderNames().map((headerName) => (
              <th>
                <div className="d-flex justify-content-between align-items-center h-100">
                  <span>{headerName}</span>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody id="car-table-tbody" className={"h-100"}>
          {props.weatherforecast.list.length !== 0 ? (
            props.weatherforecast.list.map((weather) => (
              <tr>
                <td>{weather["dt_txt"]}</td>
                <td>{weather["main"]["temp"]}</td>
                <td>{weather["main"]["temp"]}</td>
                <td>{weather["main"]["temp"]}</td>
                <td>{weather["main"]["temp"]}</td>
                <td>{weather["main"]["temp"]}</td>
                <td>{weather["main"]["temp"]}</td>
              </tr>
            ))
          ) : (
            <tr></tr>
          )}
        </tbody>
      </Table>
    )
  );
};

export default ImageList;
