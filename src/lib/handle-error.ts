import { isRedirectError } from "next/dist/client/components/redirect-error"
import { toast } from "sonner"
import { ZodError } from "zod"

export function getErrorMessage(err: unknown) {
  const uknownError = "Something went wrong. Please try again later."

  if (err instanceof ZodError) {
    const errors = err.issues.map((issue) => {
      return issue.message
    })

    return errors.join("\n")
  } else if (err instanceof Error) {
    return err.message
  } else if (isRedirectError(err)) {
    throw err
  } else if (typeof err === "string") {
    return err
  }
  return uknownError
}

export function showErrorToast(err: unknown) {
  const errorMessage = getErrorMessage(err)
  return toast.error(errorMessage)
}
