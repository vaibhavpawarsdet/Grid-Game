### **Releases**

1. Select the game of your choice. Think about the logic that must be implemented in your game. Writing a game is a lesson in planning for edge cases and all the situations that may arise. We'll take 2048 as an example for now. 
    
    **Ask yourself these questions:**
    
    → What is the gameplay like? What all can we do in the game? What are the things we can't do?
    
    → Is there a pattern to the place where the numbers pop up or are they random? What about the numbers themselves?
    
    → What is the winning condition in my game? (for example when you reach 2048)
    
2. Decide what's your [MVP](https://en.wikipedia.org/wiki/Minimum_viable_product), what are your stretch features, make a list of all features you would like to build
    - Each stage can have certain features
        
        The difficulty level, the colour theme, the swiping speeds → go crazy. 
        
    - Every stage builds upon the features from the previous stage(s). This ensures your game is not just a one off, but has multiple levels to engage users.
    - [Trello](https://trello.com/) can be a brilliant tool to work with for this. You can divide feature by [Day](https://trello.com/b/kZsVVrc8/front-product-roadmap), [progress](https://trello.com/b/0xzkRjTH/scrum-project-management-board) etc. Figure what works for your team
    - Keep the project on track. **Review, revise and reallocate**. Run through these three “Rs” on an ongoing basis.

3. Break your product down. 

1. what Data Structure should be used to represent the grid?
2. Keep the Single Responsibilty Principle in mind. It basically says that one function should do one thing, and do it extremely well.
3. Is my code following DRY principles? Or Is it redundant and repetitive?
1. Start with javascript - adding logic to your game and creating its barebones structure. To show you how to approach building a visual grid based game, here's an example: 
    