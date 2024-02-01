module.exports = {
  providers: [
    CredentialsProvider({
      name: "Email/Password",
      authorize: async (credentials) => {
        // Validate the credentials and return a user object, or null if invalid.
        const user = await findUserByEmail(credentials.email);
        if (user) {
          if (!user.password) {
            // User has signed up with Google, so skip password validation.
            return user;
          }

          if (await bcrypt.compare(credentials.password, user.password)) {
            return user;
          }
        }

        return null;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      // Create or update a user account based on the Google profile.
      const user = await findOrCreateUser(profile);

      // Return the user object.
      return user;
    },
  },
};
