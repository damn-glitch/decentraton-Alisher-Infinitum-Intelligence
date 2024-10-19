// smart-contracts/contracts/EmploymentContract.sol
pragma solidity ^0.8.0;

contract EmploymentContract {
    address public employer;
    address public employee;
    uint256 public salary;
    bool public isActive;

    constructor(address _employee, uint256 _salary) payable {
        employer = msg.sender;
        employee = _employee;
        salary = _salary;
        isActive = true;
    }

    function paySalary() public {
        require(msg.sender == employer, "Только работодатель может платить зарплату");
        require(isActive, "Контракт не активен");
        require(address(this).balance >= salary, "Недостаточно средств");
        payable(employee).transfer(salary);
    }

    function terminateContract() public {
        require(msg.sender == employer || msg.sender == employee, "Нет прав для расторжения контракта");
        isActive = false;
    }

    // Функция для пополнения контракта средствами
    function fundContract() public payable {
        require(msg.sender == employer, "Только работодатель может пополнять контракт");
    }
}
