import type { ReactNode } from "react";
import React, { Suspense } from "react";
import { useQuery } from "react-query";
import { ErrorBoundary } from "react-error-boundary";
import { success, failure, serialize, MyResponse, isResponse } from "./util";

function ReportingErrorBoundary({ children }: { children?: ReactNode }) {
  return (
    <ErrorBoundary
      fallbackRender={(props) => {
        console.log("reported", props.error);
        return <>reported: {serialize(props.error)}</>;
      }}
    >
      {children}
    </ErrorBoundary>
  );
}

function FailedErrorBoundary({ children }: { children?: ReactNode }) {
  return (
    <ErrorBoundary
      fallbackRender={(props) => {
        if (isResponse(props.error)) {
          return <>caught: {serialize(props.error)}</>;
        }
        throw props.error;
      }}
    >
      {children}
    </ErrorBoundary>
  );
}

function Success() {
  const result = useQuery("success", () => success(new MyResponse(200, "ok")));
  return <div>success: {serialize(result.data!)}</div>;
}

function Success404() {
  const result = useQuery("success404", () =>
    success(new MyResponse(404, "notfound"))
  );
  if (result.data!.isOk) {
    return <div>success: {serialize(result.data!)}</div>;
  }
  return <div>failed: {serialize(result.data!)}</div>;
}

function Failure404() {
  const result = useQuery("failure404", () =>
    failure(() => {
      throw new MyResponse(404, "notfound");
    })
  );
  return <div>success: {serialize(result.data!)}</div>;
}

function FailureSimple() {
  const result = useQuery("failure/simple", () =>
    failure(() => {
      throw Error("failure");
    })
  );
  return <div>success: {serialize(result.data!)}</div>;
}

export function App() {
  return (
    <div>
      <div>
        <ReportingErrorBoundary>
          <FailedErrorBoundary>
            <Suspense fallback="loading...">
              <Success />
            </Suspense>
          </FailedErrorBoundary>
        </ReportingErrorBoundary>
      </div>
      <div>
        <ReportingErrorBoundary>
          <FailedErrorBoundary>
            <Suspense fallback="loading...">
              <FailureSimple />
            </Suspense>
          </FailedErrorBoundary>
        </ReportingErrorBoundary>
      </div>
      <div>
        <ReportingErrorBoundary>
          <FailedErrorBoundary>
            <Suspense fallback="loading...">
              <Success404 />
            </Suspense>
          </FailedErrorBoundary>
        </ReportingErrorBoundary>
      </div>
      <div>
        <ReportingErrorBoundary>
          <FailedErrorBoundary>
            <Suspense fallback="loading...">
              <Failure404 />
            </Suspense>
          </FailedErrorBoundary>
        </ReportingErrorBoundary>
      </div>
    </div>
  );
}
