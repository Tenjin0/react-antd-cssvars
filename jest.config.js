module.exports = {
  preset: 'ts-jest',
	roots: [ '<rootDir>/lib'],
	transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ["./jest.setup.ts"],
	testMatch: ["**/*(test|spec).(ts|tsx)"],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	testPathIgnorePatterns: ["/node_modules/", '/build/', '/dist/', '/\.storybook/', '/example/'],
	moduleNameMapper: {
    // Mocks out all these file formats when tests are run.
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "identity-obj-proxy",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy"
  }
};
