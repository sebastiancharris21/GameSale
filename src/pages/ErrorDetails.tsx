import { isRouteErrorResponse, useRouteError } from "react-router-dom";

function ErrorDetails() {
  const error = useRouteError();

  return (
    <div>
      {isRouteErrorResponse(error)
        ? "La Pagina no existe"
        : `Ha ocurrido un error ${(error as Error).message}`}
    </div>
  );
}

export default ErrorDetails;
