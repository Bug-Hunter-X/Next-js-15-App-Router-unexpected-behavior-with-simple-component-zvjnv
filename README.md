# Next.js 15 App Router Unexpected Behavior with Simple Component

This repository demonstrates an unexpected behavior encountered when using a simple component in the Next.js 15 App Router. The issue arises when the component lacks any additional configurations such as routing or data fetching. This minimal setup causes the app to not render properly.

## Steps to Reproduce

1. Clone this repository.
2. Install the dependencies using `npm install`.
3. Run the development server using `npm run dev`.

## Expected Behavior

The application should render a simple "Hello World" message.

## Actual Behavior

The application does not render and displays an empty page or error.

## Solution

The solution involves adding a simple fallback mechanism which will render a loading state while the component loads, this issue appears to be related to the App Router's behavior and how it handles components without any additional configuration.