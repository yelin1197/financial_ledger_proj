function calculateIndex() {
    // 사용자 입력 값을 가져오기
    const income = document.getElementById('income-input').value;
    const expense = document.getElementById('expense-input').value;

    // 수입과 지출이 입력되었는지 확인
    if (income === "" || expense === "") {
        document.getElementById('result').innerText = "수입과 지출을 모두 입력해 주세요.";
        return;
    }

    // 수입과 지출을 숫자로 변환
    const incomeValue = parseFloat(income);
    const expenseValue = parseFloat(expense);

    // 과소비 지수 계산: (월평균수입 - 월평균저축) / 월평균수입
    const overspendingIndex = (incomeValue - expenseValue) / incomeValue;

    // 결과 출력
    document.getElementById('result').innerText = `과소비 지수: ${overspendingIndex.toFixed(2)}`;
}
