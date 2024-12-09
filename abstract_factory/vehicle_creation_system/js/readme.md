## Scenario: Vehicle Dealership System

You are developing a system for a vehicle dealership that specializes in selling cars and motorcycles. The dealership is known for offering customized options, allowing customers to choose from various models and features.

### System Requirements:

1. **Vehicle Types:**
   - The system must be able to construct two main types of vehicles: cars and motorcycles.

2. **Vehicle Variants:**
   - Each type of vehicle has specific variants, such as a sports car or a touring motorcycle.

3. **Future Expansion:**
   - The dealership plans to expand its product offering in the future to include bicycles.

4. **Flexibility and Extensibility:**
   - The system should be designed using the Abstract Factory pattern to allow the easy addition of new types of vehicles and variants without requiring modifications to the existing code.

### Abstract Factory Design Pattern:

Use the Abstract Factory design pattern to implement a flexible solution. Define abstract interfaces for vehicle factories and products, and create concrete implementations for each type of vehicle and variant. This design will ensure that the dealership can seamlessly introduce new vehicles while maintaining code extensibility.

**Objective:** Build a system that empowers the dealership to provide customizable vehicles, accommodating both current and future product expansions effortlessly.
