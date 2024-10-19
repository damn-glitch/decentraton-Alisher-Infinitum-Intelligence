import sys
import json
# Ваш код для анализа резюме
def analyze_resume(resume_path):
    # Анализ резюме и получение результатов
    result = {
        "name": "Иван Иванов",
        "email": "ivan@example.com",
        "skills": ["Python", "Django", "JavaScript"],
        # Другие данные
    }
    return result

if __name__ == "__main__":
    resume_path = sys.argv[1]
    analysis_result = analyze_resume(resume_path)
    print(json.dumps(analysis_result))
