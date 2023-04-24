import axios from "axios";
import { getData } from "./utils";

// Mocking the axios module to test API calls
jest.mock("axios");

describe("getData function", () => {
  // Test for successful API call
  test("should return data when API call is successful", async () => {
    // Defining the API endpoint URL, desired response key, and test data
    const endpoint = "https://example.com/data";
    const responseKey = "results";
    const data = [
      { id: 1, name: "John" },
      { id: 2, name: "Jane" },
    ];

    // Mocking the API response using test data
    const response = { data: { [responseKey]: data } };
    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValueOnce(response);

    // Calling the getData function with the mocked endpoint and response key
    const result = await getData(endpoint, responseKey);

    // Expecting the result to be equal to the test data
    expect(result).toEqual(data);
  });

  // Test for failed API call
  test("should return an empty array when API call fails", async () => {
    // Defining the API endpoint URL, desired response key, and a test error
    const endpoint = "https://example.com/data";
    const responseKey = "results";
    const error = new Error("Request failed");

    // Mocking the API response to throw an error
    (axios.get as jest.MockedFunction<typeof axios.get>).mockRejectedValueOnce(error);

    // Calling the getData function with the mocked endpoint and response key
    const result = await getData(endpoint, responseKey);

    // Expecting the result to be an empty array
    expect(result).toEqual([]);
  });
});
