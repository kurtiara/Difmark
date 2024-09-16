describe("Preliminary test suite", () => {
  beforeEach(() => {
    cy.visit("https://qauto.forstudy.space", {
      auth: {
        username: "guest",
        password: "welcome2qauto",
      },
    });
  });

  it("Search Check", () => {
    cy.get(".header-inner__search-input").click().type("Fifa");
    cy.contains("View All").click();
  });
});
