/* ==========================================================================
   DevAcademy — Enhanced SPA: Quests, Glossary, Flashcards, Sprint, Profile
   ========================================================================== */

// ============================================================
// 1. LANGUAGE DATA (same as before — 2 detailed lessons per lang)
// ============================================================
const languagesData = {
    python: {
        name: "Python", title: "Python Разработчик",
        iconClass: "fa-brands fa-python",
        description: "Пройдите путь от print() до асинхронности и SOLID архитектуры на Python.",
        modules: [
            {
                id: 1, title: "Введение и Базовый синтаксис",
                description: "Функция print(), переменные, числа, строки и форматирование строк.",
                lessons: [
                    {
                        id: 1, title: "1. Первая программа на Python и функция print()",
                        boilerplate: '# Напишите вашу первую программу ниже\nprint("Hello, PyAcademy!")',
                        theory: `<h4>Функция <code>print()</code></h4>
                        <p>Функция <code>print()</code> используется для вывода информации на экран (в <span class="glossary-term" data-term="консоль">консоль</span>). Текст заключается в кавычки.</p>
                        <pre><code>print("Привет, мир!")</code></pre>
                        <p>Python — это <span class="glossary-term" data-term="интерпретатор">интерпретируемый</span> язык: код выполняется строка за строкой без предварительной <span class="glossary-term" data-term="компилятор">компиляции</span>.</p>`,
                        task: `Выведите в консоль фразу <code>"Hello, PyAcademy!"</code> с помощью функции <code>print()</code>.`,
                        hints: [
                            "Используй функцию print() — это встроенная функция Python для вывода текста.",
                            "Текст нужно поместить в кавычки внутри скобок: print(\"твой текст\")",
                            "Напиши точно: print(\"Hello, PyAcademy!\")"
                        ],
                        validate: (code) => {
                            const clean = code.replace(/\s/g, "");
                            if (clean.includes("print('Hello,PyAcademy!')") || clean.includes('print("Hello,PyAcademy!")')) {
                                return { success: true, message: "Отлично! Код на Python проверен успешно! +100 XP" };
                            }
                            return { success: false, error: "Код должен содержать print('Hello, PyAcademy!')" };
                        },
                        memory: {
                            stack: [{ name: "системный вызов", val: "print()", addr: "0x7fff12" }],
                            heap: [{ name: "строка константа", val: '"Hello, PyAcademy!"', addr: "0x004a2c" }]
                        }
                    },
                    {
                        id: 2, title: "2. Переменные и типы данных",
                        boilerplate: "# Объявите переменные x и name ниже\n",
                        theory: `<h4>Переменные</h4>
                        <p><span class="glossary-term" data-term="переменная">Переменные</span> в Python создаются оператором <code>=</code>.</p>
                        <pre><code>x = 10\nname = "Алекс"</code></pre>
                        <p>Python использует <span class="glossary-term" data-term="динамическая типизация">динамическую типизацию</span> — тип определяется автоматически.</p>`,
                        task: `Создайте переменную <code>x</code> со значением <code>42</code> и <code>name</code> со значением <code>"Python"</code>.`,
                        hints: [
                            "В Python переменные создаются просто: имя = значение, без указания типа.",
                            "Числа пишутся без кавычек, строки — в кавычках: x = 42 и name = \"Python\"",
                            "Напиши две строки:\nx = 42\nname = \"Python\""
                        ],
                        validate: (code) => {
                            const hasX = /x\s*=\s*42/.test(code);
                            const hasName = /name\s*=\s*(['"])Python\1/.test(code);
                            if (hasX && hasName) return { success: true, message: "Переменные созданы успешно! +100 XP" };
                            return { success: false, error: "Объявите x = 42 и name = 'Python'" };
                        },
                        memory: {
                            stack: [
                                { name: "x", val: "42", addr: "0x7fff14" },
                                { name: "name", val: "указатель на 0x004a50", addr: "0x7fff18" }
                            ],
                            heap: [{ name: "str объект", val: '"Python"', addr: "0x004a50" }]
                        }
                    }
                ]
            }
        ]
    },
    cpp: {
        name: "C++", title: "C++ Разработчик", iconClass: "lang-icon-text",
        description: "Освойте компиляцию, ручное управление памятью, указатели и шаблоны STL.",
        modules: [{
            id: 1, title: "Введение и базовый синтаксис C++",
            description: "Функция main(), вывод std::cout, типы данных и ссылки.",
            lessons: [
                {
                    id: 1, title: "1. Вывод данных и поток std::cout",
                    boilerplate: "#include <iostream>\n\nint main() {\n    // Напишите вывод ниже\n    \n    return 0;\n}",
                    theory: `<h4>Вывод в C++</h4>
                    <p>В C++ для вывода используется объект потока <code>std::cout</code> из библиотеки <code>&lt;iostream&gt;</code> совместно с оператором <code>&lt;&lt;</code>.</p>
                    <pre><code>#include &lt;iostream&gt;\nint main() {\n    std::cout &lt;&lt; "Привет!";\n    return 0;\n}</code></pre>
                    <p>C++ — <span class="glossary-term" data-term="компилятор">компилируемый</span> язык. В отличие от Python, здесь код сначала компилируется в машинный код.</p>`,
                    task: `Выведите на экран строку <code>"Hello, C++!"</code> с помощью потока <code>std::cout</code> внутри функции <code>main</code>.`,
                    hints: [
                        "Подключи заголовочный файл iostream и используй std::cout внутри функции main.",
                        "Синтаксис вывода: std::cout << \"твой текст\";",
                        "Напиши: std::cout << \"Hello, C++!\";"
                    ],
                    validate: (code) => {
                        if (code.includes("std::cout") && code.includes("<<") && code.includes("Hello, C++!"))
                            return { success: true, message: "Прекрасно! Код на C++ успешно скомпилирован (симуляция). +100 XP" };
                        return { success: false, error: 'Убедитесь, что вы написали: std::cout << "Hello, C++!";' };
                    },
                    memory: {
                        stack: [{ name: "std::cout", val: "поток вывода", addr: "0x7ffe01" }],
                        heap: [{ name: "текст литерал", val: '"Hello, C++!"', addr: "0x0010cc" }]
                    }
                },
                {
                    id: 2, title: "2. Переменные и типы данных в C++",
                    boilerplate: "#include <iostream>\n#include <string>\n\nint main() {\n    // Создайте переменные x и name ниже\n    \n    return 0;\n}",
                    theory: `<h4>Объявление переменных в C++</h4>
                    <p>В C++ требуется явно указывать <span class="glossary-term" data-term="тип данных">тип</span> переменной при её создании (<span class="glossary-term" data-term="статическая типизация">статическая типизация</span>):</p>
                    <pre><code>int age = 20;\nstd::string name = "Иван";</code></pre>`,
                    task: `Объявите целочисленную переменную <code>x</code> со значением <code>42</code> и строковую переменную <code>name</code> со значением <code>"C++"</code>.`,
                    hints: [
                        "В C++ перед именем переменной пишется тип: int для чисел, std::string для строк.",
                        "Каждое объявление заканчивается точкой с запятой.",
                        "Напиши:\nint x = 42;\nstd::string name = \"C++\";"
                    ],
                    validate: (code) => {
                        const hasX = /int\s+x\s*=\s*42\s*;/.test(code);
                        const hasName = /(std::)?string\s+name\s*=\s*(['"])C\+\+\2\s*;/.test(code);
                        if (hasX && hasName) return { success: true, message: "Переменные C++ успешно объявлены! +100 XP" };
                        return { success: false, error: 'Напишите: int x = 42; и std::string name = "C++";' };
                    },
                    memory: {
                        stack: [
                            { name: "int x", val: "42 (4 байта)", addr: "0x7ffe04" },
                            { name: "string name", val: "указатель на кучу (8 байт)", addr: "0x7ffe08" }
                        ],
                        heap: [{ name: "std::string буфер", val: '"C++"', addr: "0x002e10" }]
                    }
                }
            ]
        }]
    },
    csharp: {
        name: "C#", title: "C# .NET Разработчик", iconClass: "lang-icon-text",
        description: "Узнайте платформу .NET, строгую типизацию, ООП на классах и LINQ.",
        modules: [{
            id: 1, title: "Введение и синтаксис C#",
            description: "Классы, метод Main, Console.WriteLine и типы.",
            lessons: [
                {
                    id: 1, title: "1. Вывод на консоль Console.WriteLine()",
                    boilerplate: "using System;\n\nclass Program {\n    static void Main() {\n        // Напишите вывод здесь\n    }\n}",
                    theory: `<h4>Вывод в C#</h4>
                    <p>В языке C# для вывода текста в <span class="glossary-term" data-term="консоль">консоль</span> используется статический метод класса Console:</p>
                    <pre><code>Console.WriteLine("Привет, мир!");</code></pre>
                    <p>C# работает на платформе .NET и является <span class="glossary-term" data-term="компилятор">компилируемым</span> языком с <span class="glossary-term" data-term="статическая типизация">статической типизацией</span>.</p>`,
                    task: `Выведите фразу <code>"Hello, C#!"</code> с помощью метода <code>Console.WriteLine()</code>.`,
                    hints: [
                        "Используй Console.WriteLine() для вывода в консоль в C#.",
                        "Не забудь точку с запятой в конце строки.",
                        "Напиши: Console.WriteLine(\"Hello, C#!\");"
                    ],
                    validate: (code) => {
                        if (code.includes("Console.WriteLine") && code.includes("Hello, C#!"))
                            return { success: true, message: "C# код выполнен успешно! +100 XP" };
                        return { success: false, error: 'Используйте метод Console.WriteLine("Hello, C#!");' };
                    },
                    memory: {
                        stack: [{ name: "вызов Main()", val: "Frame", addr: "0x7ffd01" }],
                        heap: [{ name: "System.String", val: '"Hello, C#!"', addr: "0x0080aa" }]
                    }
                },
                {
                    id: 2, title: "2. Переменные в C#",
                    boilerplate: "using System;\n\nclass Program {\n    static void Main() {\n        // Создайте переменные x и name ниже\n    }\n}",
                    theory: `<h4>Типы данных C#</h4>
                    <p>C# — строго <span class="glossary-term" data-term="статическая типизация">типизированный</span> язык. <span class="glossary-term" data-term="переменная">Переменные</span> объявляются с типом:</p>
                    <pre><code>int number = 100;\nstring text = "C#";</code></pre>`,
                    task: `Создайте переменную типа <code>int</code> с именем <code>x</code> и значением <code>42</code>, и переменную типа <code>string</code> с именем <code>name</code> со значением <code>"C#"</code>.`,
                    hints: [
                        "В C# тип пишется перед именем переменной.",
                        "Для целых чисел — int, для текста — string. Каждая строка заканчивается ;",
                        "Напиши:\nint x = 42;\nstring name = \"C#\";"
                    ],
                    validate: (code) => {
                        const hasX = /int\s+x\s*=\s*42\s*;/.test(code);
                        const hasName = /string\s+name\s*=\s*(['"])C#\1\s*;/.test(code);
                        if (hasX && hasName) return { success: true, message: "Переменные C# созданы! +100 XP" };
                        return { success: false, error: 'Напишите: int x = 42; и string name = "C#";' };
                    },
                    memory: {
                        stack: [
                            { name: "int x (Value Type)", val: "42", addr: "0x7ffd04" },
                            { name: "string name (Ref Type)", val: "указатель на 0x0080c8", addr: "0x7ffd08" }
                        ],
                        heap: [{ name: "String объект", val: '"C#"', addr: "0x0080c8" }]
                    }
                }
            ]
        }]
    },
    c: {
        name: "C", title: "Системный программист C", iconClass: "lang-icon-text",
        description: "Пишите быстрый системный код, работайте напрямую с указателями и адресами.",
        modules: [{
            id: 1, title: "Введение и синтаксис C",
            description: "Функция printf, переменные, адреса в памяти и файлы.",
            lessons: [
                {
                    id: 1, title: "1. Форматированный вывод printf()",
                    boilerplate: "#include <stdio.h>\n\nint main() {\n    // Выведите строку здесь\n    \n    return 0;\n}",
                    theory: `<h4>Вывод в языке C</h4>
                    <p>В языке C стандартный вывод осуществляется через функцию <code>printf()</code> из библиотеки <code>&lt;stdio.h&gt;</code>.</p>
                    <pre><code>printf("Привет, %s!", "Мир");</code></pre>
                    <p>C — <span class="glossary-term" data-term="компилятор">компилируемый</span> язык низкого уровня. <span class="glossary-term" data-term="указатель">Указатели</span> — ключевая особенность языка.</p>`,
                    task: `Выведите фразу <code>"Hello, C!"</code> с помощью функции <code>printf()</code> в методе <code>main</code>.`,
                    hints: [
                        "Подключи заголовочный файл stdio.h для использования printf.",
                        "printf принимает строку в двойных кавычках: printf(\"текст\");",
                        "Напиши: printf(\"Hello, C!\");"
                    ],
                    validate: (code) => {
                        if (code.includes("printf") && code.includes("Hello, C!"))
                            return { success: true, message: "Код на языке C выполнен! +100 XP" };
                        return { success: false, error: 'Используйте printf("Hello, C!");' };
                    },
                    memory: {
                        stack: [{ name: "main()", val: "Frame", addr: "0x7ffc01" }],
                        heap: [{ name: "константный массив char", val: '"Hello, C!"', addr: "0x0033aa" }]
                    }
                },
                {
                    id: 2, title: "2. Переменные в языке C",
                    boilerplate: "#include <stdio.h>\n\nint main() {\n    // Объявите x и name здесь\n    \n    return 0;\n}",
                    theory: `<h4>Типы в C</h4>
                    <p>В языке C нет встроенного типа для строк (string). Строки представляют собой массивы символов:</p>
                    <pre><code>int age = 18;\nchar name[] = "Иван";</code></pre>
                    <p><span class="glossary-term" data-term="массив">Массив</span> <code>char[]</code> — это последовательность символов в <span class="glossary-term" data-term="стек">стеке</span>.</p>`,
                    task: `Создайте целочисленную переменную <code>x</code> равную <code>42</code> и символьный массив <code>name[]</code> со значением <code>"C"</code>.`,
                    hints: [
                        "В C строки — это массивы символов (char). Числа хранятся в переменных типа int.",
                        "Для строк используй: char name[] = \"значение\";",
                        "Напиши:\nint x = 42;\nchar name[] = \"C\";"
                    ],
                    validate: (code) => {
                        const hasX = /int\s+x\s*=\s*42\s*;/.test(code);
                        const hasName = /char\s+name\s*\[\s*\]\s*=\s*(['"])C\1\s*;/.test(code);
                        if (hasX && hasName) return { success: true, message: "Переменные языка C созданы! +100 XP" };
                        return { success: false, error: 'Напишите: int x = 42; и char name[] = "C";' };
                    },
                    memory: {
                        stack: [
                            { name: "int x", val: "42 (4 байта)", addr: "0x7ffc04" },
                            { name: "char name[2]", val: "['C', '\\0']", addr: "0x7ffc08" }
                        ],
                        heap: [{ name: "(Куча не используется)", val: "-", addr: "-" }]
                    }
                }
            ]
        }]
    },
    java: {
        name: "Java", title: "Java Enterprise Developer", iconClass: "fa-brands fa-java",
        description: "Изучите JVM, ООП концепции, JVM Memory Model и фреймворк Spring.",
        modules: [{
            id: 1, title: "Введение и синтаксис Java",
            description: "Классы, System.out.println, типы данных и OOP введение.",
            lessons: [
                {
                    id: 1, title: "1. Вывод в консоль System.out.println()",
                    boilerplate: "public class Main {\n    public static void main(String[] args) {\n        // Напишите вывод здесь\n    }\n}",
                    theory: `<h4>Вывод в Java</h4>
                    <p>В Java вывод в <span class="glossary-term" data-term="консоль">консоль</span> осуществляется с помощью вызова:</p>
                    <pre><code>System.out.println("Hello, World!");</code></pre>
                    <p>Java — <span class="glossary-term" data-term="компилятор">компилируемый</span> язык. Код компилируется в <span class="glossary-term" data-term="байткод">байткод</span> и запускается на JVM.</p>`,
                    task: `Выведите фразу <code>"Hello, Java!"</code> используя метод <code>System.out.println()</code>.`,
                    hints: [
                        "Используй System.out.println() — стандартный способ вывода в Java.",
                        "System пишется с большой буквы, все остальное — строчными.",
                        "Напиши: System.out.println(\"Hello, Java!\");"
                    ],
                    validate: (code) => {
                        if (code.includes("System.out.println") && code.includes("Hello, Java!"))
                            return { success: true, message: "Java-программа скомпилирована в байткод! +100 XP" };
                        return { success: false, error: 'Убедитесь, что вы написали: System.out.println("Hello, Java!");' };
                    },
                    memory: {
                        stack: [{ name: "main thread Stack", val: "main() Frame", addr: "0x7ffb01" }],
                        heap: [{ name: "java.lang.String", val: '"Hello, Java!"', addr: "0x0090ff" }]
                    }
                },
                {
                    id: 2, title: "2. Примитивы и объекты в Java",
                    boilerplate: "public class Main {\n    public static void main(String[] args) {\n        // Объявите x и name здесь\n    }\n}",
                    theory: `<h4>Переменные в Java</h4>
                    <p>В Java типы делятся на примитивные (хранятся в <span class="glossary-term" data-term="стек">стеке</span>) и ссылочные (объекты в <span class="glossary-term" data-term="куча">куче</span>):</p>
                    <pre><code>int number = 10;\nString text = "Java";</code></pre>`,
                    task: `Создайте переменную <code>x</code> типа <code>int</code> со значением <code>42</code> и переменную <code>name</code> типа <code>String</code> со значением <code>"Java"</code>.`,
                    hints: [
                        "В Java примитивные типы: int, double, boolean. String — это класс (с большой буквы!).",
                        "Каждое объявление заканчивается точкой с запятой.",
                        "Напиши:\nint x = 42;\nString name = \"Java\";"
                    ],
                    validate: (code) => {
                        const hasX = /int\s+x\s*=\s*42\s*;/.test(code);
                        const hasName = /String\s+name\s*=\s*(['"])Java\1\s*;/.test(code);
                        if (hasX && hasName) return { success: true, message: "Переменные Java созданы в памяти JVM! +100 XP" };
                        return { success: false, error: 'Напишите: int x = 42; и String name = "Java";' };
                    },
                    memory: {
                        stack: [
                            { name: "int x (primitive)", val: "42", addr: "0x7ffb04" },
                            { name: "String name (reference)", val: "ref to 0x0091aa", addr: "0x7ffb08" }
                        ],
                        heap: [{ name: "java.lang.String (Pool)", val: '"Java"', addr: "0x0091aa" }]
                    }
                }
            ]
        }]
    }
};

// Generate skeleton modules 2-10 for each language
const modulesSchema = [
    { id: 1, title: "Модуль 1: Введение и базовый синтаксис", lessonsRange: [1, 10] },
    { id: 2, title: "Модуль 2: Управляющие конструкции и ветвления", lessonsRange: [11, 20] },
    { id: 3, title: "Модуль 3: Коллекции и структуры данных", lessonsRange: [21, 30] },
    { id: 4, title: "Модуль 4: Функциональное программирование / Методы", lessonsRange: [31, 40] },
    { id: 5, title: "Модуль 5: Работа с окружением и ошибками", lessonsRange: [41, 50] },
    { id: 6, title: "Модуль 6: Объектно-Ориентированное Программирование", lessonsRange: [51, 60] },
    { id: 7, title: "Модуль 7: Базы данных и SQL-интеграции", lessonsRange: [61, 70] },
    { id: 8, title: "Модуль 8: Продвинутые фишки и метапрограммирование", lessonsRange: [71, 80] },
    { id: 9, title: "Модуль 9: Асинхронность и параллельные вычисления", lessonsRange: [81, 90] },
    { id: 10, title: "Модуль 10: Архитектурные паттерны, Тесты и Docker", lessonsRange: [91, 100] }
];

Object.keys(languagesData).forEach(langKey => {
    const lang = languagesData[langKey];
    const originalMod1 = lang.modules[0];
    const originalLessons = originalMod1.lessons;
    lang.modules = [];
    modulesSchema.forEach(schema => {
        const moduleLessons = [];
        for (let lId = schema.lessonsRange[0]; lId <= schema.lessonsRange[1]; lId++) {
            if (schema.id === 1 && lId <= originalLessons.length) {
                moduleLessons.push(originalLessons[lId - 1]);
            } else {
                moduleLessons.push({
                    id: lId,
                    title: `${lId}. Тема урока для ${lang.name} (Урок №${lId})`,
                    boilerplate: `# Шаблон решения для ${lang.name}\n`,
                    theory: `<h4>Теория урока №${lId}</h4>
                    <p>Это заготовка для урока по теме №${lId} на языке ${lang.name}. Вы можете заменить это содержимое в файле <code>script.js</code>.</p>`,
                    task: `Напишите любой код на ${lang.name} длиной более 5 символов для сдачи задания к уроку №${lId}.`,
                    hints: [
                        "Напиши любой код, подходящий к теме урока.",
                        "Можно написать комментарий или простое выражение.",
                        "Напиши хотя бы 6 символов — например, комментарий."
                    ],
                    validate: (code) => {
                        if (code.trim().length > 5)
                            return { success: true, message: `Задание урока №${lId} на ${lang.name} успешно принято! +100 XP` };
                        return { success: false, error: "Напишите код решения задачи!" };
                    },
                    memory: {
                        stack: [{ name: "регистр данных", val: "malloc()", addr: "0x7fffbc" }],
                        heap: [{ name: "свободная ячейка", val: "0x00", addr: "0x00a0f0" }]
                    }
                });
            }
        }
        lang.modules.push({
            id: schema.id, title: schema.title,
            description: `Модуль содержит уроки по теме с ${schema.lessonsRange[0]} по ${schema.lessonsRange[1]}`,
            lessons: moduleLessons
        });
    });
});

// ============================================================
// 2. CHEAT SHEETS
// ============================================================
const cheatSheets = {
    python: [
        { title: "Вывод print()", desc: "Печать данных на экран.", code: "print('Hello!')" },
        { title: "Списки (Lists)", desc: "Создание и добавление элементов.", code: "items = []\nitems.append('apple')" },
        { title: "Словари (Dicts)", desc: "Ключи и значения.", code: "user = {'name': 'Alex'}" },
        { title: "f-строки", desc: "Форматирование строк.", code: "name = 'Алекс'\nprint(f'Привет, {name}!')" },
        { title: "Цикл for", desc: "Перебор элементов.", code: "for i in range(5):\n    print(i)" }
    ],
    cpp: [
        { title: "Вывод std::cout", desc: "Поток вывода в консоль.", code: 'std::cout << "Hello!" << std::endl;' },
        { title: "Указатели (Pointers)", desc: "Хранят адрес памяти объекта.", code: "int x = 10;\nint* ptr = &x;\nstd::cout << *ptr; // 10" },
        { title: "Вектор (std::vector)", desc: "Динамический массив STL.", code: "#include <vector>\nstd::vector<int> vec = {1, 2};\nvec.push_back(3);" }
    ],
    csharp: [
        { title: "Вывод Console.WriteLine", desc: "Выводит строку на экран.", code: 'Console.WriteLine("Hello!");' },
        { title: "Классы (Classes)", desc: "Определение структуры класса.", code: "public class Person {\n    public string Name { get; set; }\n}" },
        { title: "Коллекция List", desc: "Динамический список .NET.", code: 'List<string> list = new List<string>();\nlist.Add("item");' }
    ],
    c: [
        { title: "Вывод printf()", desc: "Форматированный вывод printf.", code: 'printf("Число: %d\\n", 42);' },
        { title: "Указатели в C", desc: "Адресная арифметика.", code: "int x = 5;\nint *p = &x;\n*p = 20; // x теперь 20" },
        { title: "Выделение памяти malloc", desc: "Ручное выделение памяти в куче.", code: "int* arr = (int*)malloc(5 * sizeof(int));\nfree(arr);" }
    ],
    java: [
        { title: "Вывод System.out.println", desc: "Вывод текста с переносом.", code: 'System.out.println("Hello!");' },
        { title: "Список ArrayList", desc: "Динамический массив в Java.", code: 'ArrayList<String> list = new ArrayList<>();\nlist.add("Java");' },
        { title: "Объявление класса", desc: "Объектная структура Java.", code: "public class Car {\n    private String model;\n    public Car(String model) { this.model = model; }\n}" }
    ]
};

// ============================================================
// 3. GLOSSARY DATA
// ============================================================
const glossaryData = [
    { term: "переменная", def: "Именованная ячейка памяти, хранящая значение определённого типа. Значение переменной можно изменять во время работы программы.", example: "x = 42  # Python" },
    { term: "функция", def: "Именованный блок кода, выполняющий определённую задачу. Функцию можно вызывать многократно из разных мест программы.", example: "def greet(): print('Hi')" },
    { term: "компилятор", def: "Программа, которая переводит весь исходный код языка высокого уровня в машинный код (или байткод) перед запуском.", example: "gcc, javac, cl.exe" },
    { term: "интерпретатор", def: "Программа, которая выполняет исходный код строка за строкой в реальном времени, без предварительной компиляции.", example: "python, node.js, ruby" },
    { term: "стек", def: "Область памяти, работающая по принципу LIFO (последним пришёл — первым вышел). Хранит локальные переменные и адреса возврата функций.", example: "int x = 5; // в стеке" },
    { term: "куча", def: "Область динамической памяти, где объекты размещаются произвольно. Требует явного освобождения (C/C++) или управляется сборщиком мусора (Java, C#).", example: "int* p = malloc(4);" },
    { term: "указатель", def: "Переменная, хранящая адрес другой переменной в памяти. Используется в C и C++ для прямой работы с памятью.", example: "int* ptr = &x;" },
    { term: "ООП", def: "Объектно-ориентированное программирование — парадигма, основанная на понятиях класса и объекта. Ключевые принципы: инкапсуляция, наследование, полиморфизм.", example: "class Car { ... }" },
    { term: "класс", def: "Шаблон (blueprint) для создания объектов. Класс описывает поля (данные) и методы (поведение) объекта.", example: "class Person { string name; }" },
    { term: "объект", def: "Экземпляр класса. Конкретная сущность в памяти, созданная по шаблону класса.", example: "Person p = new Person();" },
    { term: "наследование", def: "Механизм ООП, позволяющий новому классу (потомку) унаследовать свойства и методы родительского класса.", example: "class Dog extends Animal { }" },
    { term: "полиморфизм", def: "Способность объектов разных классов реагировать на один и тот же метод по-разному. Переопределение и перегрузка.", example: "animal.speak(); // у кошки и собаки разный результат" },
    { term: "инкапсуляция", def: "Сокрытие внутренней реализации объекта и предоставление доступа только через публичный интерфейс (методы).", example: "private int age; // скрыто" },
    { term: "рекурсия", def: "Техника программирования, при которой функция вызывает сама себя для решения подзадачи.", example: "def fact(n): return 1 if n==0 else n*fact(n-1)" },
    { term: "итерация", def: "Повторное выполнение блока кода с помощью цикла (for, while). В отличие от рекурсии, не создаёт новых стековых фреймов.", example: "for i in range(10): print(i)" },
    { term: "синтаксис", def: "Набор правил, определяющих правильную структуру программы на данном языке программирования.", example: "if x > 0: # Python синтаксис" },
    { term: "семантика", def: "Смысл программной конструкции — что именно происходит при её выполнении, в отличие от синтаксиса (формы).", example: "x = x + 1 // увеличивает x на 1" },
    { term: "тип данных", def: "Категория значений, определяющая какие операции можно выполнять над переменной (int, float, string, bool и т.д.).", example: "int x; string s; bool flag;" },
    { term: "динамическая типизация", def: "Тип переменной определяется автоматически в момент присваивания значения и может меняться. Характерно для Python, JavaScript.", example: "x = 42  # int\nx = 'hi'  # str" },
    { term: "статическая типизация", def: "Тип переменной задаётся при объявлении и не меняется. Ошибки типов выявляются на этапе компиляции. Характерно для C, Java, C#.", example: "int x = 42; // тип фиксирован" },
    { term: "массив", def: "Упорядоченная коллекция элементов одного типа, расположенных в памяти последовательно. Доступ по индексу.", example: "int arr[5] = {1,2,3,4,5};" },
    { term: "алгоритм", def: "Точная последовательность шагов для решения задачи, гарантированно приводящая к результату за конечное время.", example: "Сортировка пузырьком, бинарный поиск" },
    { term: "байткод", def: "Промежуточный код, генерируемый компилятором Java или Python. Выполняется виртуальной машиной (JVM, CPython), а не напрямую процессором.", example: ".class файлы в Java" },
    { term: "консоль", def: "Текстовый интерфейс для ввода команд и просмотра вывода программы. В веб-браузере — инструмент разработчика (F12).", example: "print(), console.log()" },
    { term: "область видимости", def: "Область кода, в которой доступна переменная или функция. Локальная (внутри функции) и глобальная (для всего файла).", example: "def f():\n    x = 1  # локальная" },
    { term: "исключение", def: "Событие, нарушающее нормальное выполнение программы. Обрабатывается блоком try/catch (или try/except в Python).", example: "try: ... except ValueError: ..." },
    { term: "интерфейс", def: "В ООП — набор методов без реализации, который должен реализовать класс. Определяет контракт поведения.", example: "interface Printable { void print(); }" },
    { term: "метод", def: "Функция, определённая внутри класса и описывающая поведение объектов этого класса.", example: "class Car:\n    def start(self): ..." },
    { term: "библиотека", def: "Набор готовых функций и классов, которые можно подключить к программе для повторного использования.", example: "import math  # Python" },
    { term: "фреймворк", def: "Расширенная библиотека с заданной архитектурой, которая определяет структуру всего приложения.", example: "Django, Spring, .NET" }
];

// ============================================================
// 4. QUIZ DATA
// ============================================================
const quizData = [
    { q: "Как называется встроенный менеджер пакетов в Python?", options: ["pip", "npm", "cargo", "maven"], correct: 0, feedback: "Правильно! pip — стандартный менеджер пакетов для Python." },
    { q: "Какой оператор используется для удаления памяти через 'new' в C++?", options: ["free()", "delete", "clear", "remove"], correct: 1, feedback: "Верно! delete освобождает динамическую память в C++." },
    { q: "Что такое LINQ в C#?", options: ["Библиотека шифрования", "Язык интегрированных запросов", "Инструмент компиляции", "Класс логирования"], correct: 1, feedback: "Правильно! Language Integrated Query используется для фильтрации данных." },
    { q: "Какая функция в языке C используется для ручного освобождения памяти?", options: ["malloc()", "release()", "free()", "clear()"], correct: 2, feedback: "Верно! free() возвращает память операционной системе." },
    { q: "Что такое JVM в Java?", options: ["Редактор кода", "Виртуальная машина Java", "Система сборки", "Пакетный менеджер"], correct: 1, feedback: "Правильно! Java Virtual Machine запускает байткод Java." },
    { q: "Какой принцип ООП описывает сокрытие внутренней реализации?", options: ["Наследование", "Полиморфизм", "Инкапсуляция", "Абстракция"], correct: 2, feedback: "Верно! Инкапсуляция скрывает внутреннее устройство класса." },
    { q: "Что такое рекурсия?", options: ["Тип цикла", "Функция, вызывающая сама себя", "Сортировочный алгоритм", "Тип массива"], correct: 1, feedback: "Правильно! Рекурсия — это когда функция вызывает сама себя." }
];

// ============================================================
// 5. FLASHCARDS DATA
// ============================================================
const flashcardsData = {
    python: [
        { q: "Что делает функция print()?", a: "Выводит данные в консоль (стандартный поток вывода stdout)." },
        { q: "Как создать список в Python?", a: "my_list = [] — пустой список, или my_list = [1, 2, 3] с элементами." },
        { q: "Что такое динамическая типизация в Python?", a: "Тип переменной определяется автоматически при присваивании: x = 42 → int, x = 'hi' → str." },
        { q: "Как написать цикл for в Python?", a: "for i in range(n):  — перебирает числа от 0 до n-1." },
        { q: "Что такое lambda в Python?", a: "Анонимная функция в одну строку: add = lambda x, y: x + y" },
        { q: "Чем dict отличается от list?", a: "dict хранит пары ключ:значение (неупорядоченный), list — последовательность по индексу (упорядоченный)." }
    ],
    cpp: [
        { q: "Зачем нужен #include <iostream>?", a: "Подключает библиотеку ввода-вывода, содержащую std::cout и std::cin." },
        { q: "Что такое указатель в C++?", a: "Переменная, хранящая адрес памяти другой переменной. int* ptr = &x;" },
        { q: "В чём разница между new и malloc?", a: "new вызывает конструктор объекта, malloc просто выделяет память. new — C++, malloc — C/C++." },
        { q: "Что такое ссылка (reference) в C++?", a: "Псевдоним (alias) для уже существующей переменной. int& ref = x; — ref это другое имя для x." },
        { q: "Что такое STL?", a: "Standard Template Library — стандартная библиотека шаблонов: vector, map, set, алгоритмы." }
    ],
    csharp: [
        { q: "Что такое namespace в C#?", a: "Пространство имён — способ организации классов, предотвращающий конфликты имён. using System;" },
        { q: "Чем класс отличается от структуры в C#?", a: "Класс — ссылочный тип (в куче), struct — значимый тип (в стеке). struct не поддерживает наследование." },
        { q: "Что такое свойство (Property) в C#?", a: "Обёртка над полем с геттером и сеттером: public int Age { get; set; }" },
        { q: "Что такое LINQ?", a: "Language Integrated Query — синтаксис запросов к коллекциям прямо в C#: list.Where(x => x > 0)" },
        { q: "Что делает async/await в C#?", a: "Позволяет писать асинхронный код в синхронном стиле. await приостанавливает метод до завершения задачи." }
    ],
    c: [
        { q: "Что такое указатель в C?", a: "Переменная, хранящая адрес памяти. int *ptr = &x; *ptr — разыменование (получение значения)." },
        { q: "Чем malloc отличается от calloc?", a: "malloc выделяет память без инициализации. calloc выделяет и заполняет нулями." },
        { q: "Что такое struct в C?", a: "Пользовательский составной тип данных, объединяющий несколько полей разных типов." },
        { q: "Зачем нужен free()?", a: "Освобождает динамически выделенную память (malloc/calloc). Без free() — утечка памяти." },
        { q: "Что такое NULL в C?", a: "Нулевой указатель, не ссылающийся ни на какой объект. Проверка: if (ptr == NULL) ..." }
    ],
    java: [
        { q: "Что такое JVM?", a: "Java Virtual Machine — виртуальная машина, исполняющая байткод Java. Обеспечивает платформонезависимость." },
        { q: "Чем примитив отличается от объекта в Java?", a: "Примитивы (int, double, bool) хранятся в стеке. Объекты (String, Integer) — в куче, доступ по ссылке." },
        { q: "Что такое интерфейс в Java?", a: "Контракт (набор сигнатур методов) без реализации. Класс реализует интерфейс через implements." },
        { q: "Что делает final в Java?", a: "Запрещает изменение: final переменная — константа, final класс — нельзя наследовать, final метод — нельзя переопределить." },
        { q: "Что такое Garbage Collector?", a: "Автоматический сборщик мусора JVM. Освобождает память объектов, на которые нет ссылок." }
    ]
};

// ============================================================
// 6. CODE-OR-NOT GAME DATA
// ============================================================
const codeOrNotData = [
    { code: 'print("Hello, World!")', lang: "Python", isValid: true },
    { code: 'priint("Hello")', lang: "Python", isValid: false },
    { code: 'for i in range(5):\n    print(i)', lang: "Python", isValid: true },
    { code: 'for i in range(5)\n    print(i)', lang: "Python", isValid: false },
    { code: 'x = 42\nname = "Python"', lang: "Python", isValid: true },
    { code: 'x == 42\nname = Python', lang: "Python", isValid: false },
    { code: 'std::cout << "Hello!" << std::endl;', lang: "C++", isValid: true },
    { code: 'std.cout << "Hello!" << std.endl;', lang: "C++", isValid: false },
    { code: 'int x = 42;\nstd::string name = "C++";', lang: "C++", isValid: true },
    { code: 'int x = 42\nstring name = "C++"', lang: "C++", isValid: false },
    { code: 'Console.WriteLine("Hello, C#!");', lang: "C#", isValid: true },
    { code: 'console.writeline("Hello, C#!")', lang: "C#", isValid: false },
    { code: 'int x = 42;\nstring name = "C#";', lang: "C#", isValid: true },
    { code: 'int x = 42\nstring name = "C#"', lang: "C#", isValid: false },
    { code: 'printf("Hello, C!");', lang: "C", isValid: true },
    { code: 'printf "Hello, C!"', lang: "C", isValid: false },
    { code: 'int x = 42;\nchar name[] = "C";', lang: "C", isValid: true },
    { code: 'int x = 42\nchar name = "C"', lang: "C", isValid: false },
    { code: 'System.out.println("Hello, Java!");', lang: "Java", isValid: true },
    { code: 'system.out.println("Hello, Java!")', lang: "Java", isValid: false },
    { code: 'int x = 42;\nString name = "Java";', lang: "Java", isValid: true },
    { code: 'Int x = 42;\nString name = Java;', lang: "Java", isValid: false }
];

// ============================================================
// 7. QUESTS DATA
// ============================================================
const questsData = {
    daily: [
        { id: "daily_lesson", icon: "🔥", title: "Разогрев", desc: "Пройди 1 урок сегодня", reward: 100, type: "daily", goal: 1, trackKey: "lessonsToday" },
        { id: "daily_quiz", icon: "🧠", title: "Мозговой штурм", desc: "Ответь верно на 3 вопроса викторины", reward: 150, type: "daily", goal: 3, trackKey: "quizCorrectToday" },
        { id: "daily_glossary", icon: "📖", title: "Исследователь", desc: "Загляни в Словарь терминов", reward: 50, type: "daily", goal: 1, trackKey: "glossaryOpenedToday" }
    ],
    story: [
        { id: "story_first_lesson", icon: "🏁", title: "Первые шаги", desc: "Пройди урок №1 на любом языке", reward: 200, type: "story", goal: 1, trackKey: "totalCompleted" },
        { id: "story_10_lessons", icon: "🔢", title: "Арифметика", desc: "Пройди 10 уроков суммарно", reward: 250, type: "story", goal: 10, trackKey: "totalCompleted" },
        { id: "story_xp_500", icon: "💎", title: "Коллекционер знаний", desc: "Набери 500 XP на одном языке", reward: 300, type: "story", goal: 500, trackKey: "maxLangXP" },
        { id: "story_polyglot", icon: "🗺️", title: "Полиглот", desc: "Начни учить 3 разных языка (пройди хоть 1 урок)", reward: 300, type: "story", goal: 3, trackKey: "langsStarted" },
        { id: "story_full_module", icon: "🌟", title: "Полный модуль", desc: "Заверши модуль 1 полностью (10 уроков)", reward: 500, type: "story", goal: 10, trackKey: "maxModuleCompleted" }
    ]
};

// ============================================================
// 8. ACHIEVEMENTS DATA
// ============================================================
const achievementsData = [
    { id: "ach_first_code", icon: "🥇", title: "Первый код", desc: "Выполни первое задание", condition: (s) => getTotalCompleted(s) >= 1 },
    { id: "ach_streak_7", icon: "🔥", title: "Неделя огня", desc: "7 дней подряд (стрик ≥ 7)", condition: (s) => s.streak >= 7 },
    { id: "ach_streak_30", icon: "🌋", title: "Месяц огня", desc: "30 дней подряд", condition: (s) => s.streak >= 30 },
    { id: "ach_xp_1000", icon: "⭐", title: "XP-коллектор", desc: "Набери 1000 XP суммарно", condition: (s) => getTotalXP(s) >= 1000 },
    { id: "ach_polyglot", icon: "🌈", title: "Полиглот", desc: "Пройди по 1 уроку на каждом из 5 языков", condition: (s) => Object.keys(s.languages).every(l => s.languages[l].completedLessons.length >= 1) },
    { id: "ach_10_lessons", icon: "📚", title: "Любитель знаний", desc: "Пройди 10 уроков", condition: (s) => getTotalCompleted(s) >= 10 },
    { id: "ach_25_lessons", icon: "🚀", title: "На орбите", desc: "Пройди 25 уроков", condition: (s) => getTotalCompleted(s) >= 25 },
    { id: "ach_quiz_5", icon: "🧪", title: "Квизмастер", desc: "Ответь верно на 5 вопросов викторины", condition: (s) => (s.quizCorrectTotal || 0) >= 5 },
    { id: "ach_sprint_win", icon: "⚡", title: "Молния", desc: "Выполни урок в режиме спринта", condition: (s) => (s.sprintWins || 0) >= 1 },
    { id: "ach_flashcard_10", icon: "🃏", title: "Картёжник", desc: "Просмотри 10 флэшкарточек", condition: (s) => (s.flashcardsViewed || 0) >= 10 }
];

function getTotalCompleted(s) {
    return Object.keys(s.languages).reduce((sum, l) => sum + s.languages[l].completedLessons.length, 0);
}
function getTotalXP(s) {
    return Object.keys(s.languages).reduce((sum, l) => sum + s.languages[l].xp, 0);
}

// ============================================================
// 9. AI TUTOR REPLIES
// ============================================================
const aiTutorReplies = {
    python: {
        1: {
            "Как работает print()?": "Функция print() принимает аргументы и передает их в поток вывода консоли. В конце она автоматически добавляет символ новой строки \\n.",
            "Какая здесь ошибка?": "Частая ошибка — забыть закрыть кавычки или круглые скобки, либо написать Print() с заглавной буквы.",
            "Дай подсказку": 'Просто напишите: print("Hello, PyAcademy!")'
        },
        2: {
            "Что такое динамическая типизация?": "В Python вам не нужно писать тип данных. Переводчик автоматически понимает, что x = 42 — это int, а name = 'Python' — это str.",
            "Какая здесь ошибка?": "Убедитесь, что имена переменных написаны ровно как в задании (x и name) в нижнем регистре.",
            "Дай подсказку": 'Напишите две строчки:\nx = 42\nname = "Python"'
        }
    },
    cpp: {
        1: {
            "Как работает std::cout?": "cout означает 'character output'. Это объект класса ostream. Символ << посылает данные строки в поток вывода.",
            "Какая здесь ошибка?": "Убедитесь, что подключен заголовок #include <iostream>, и в конце инструкции стоит точка с запятой (;).",
            "Дай подсказку": 'Внутри main напишите: std::cout << "Hello, C++!";'
        },
        2: {
            "Почему у name тип std::string?": "В C++ строки не являются базовым типом. Это объект стандартной библиотеки std::string, определенный в заголовке <string>.",
            "Какая здесь ошибка?": 'Убедитесь, что вы объявили int x = 42; и std::string name = "C++"; с точками с запятой.',
            "Дай подсказку": 'Код должен быть:\nint x = 42;\nstd::string name = "C++";'
        }
    },
    csharp: {
        1: {
            "В чем разница с Python?": "В C# код обязательно должен находиться внутри класса и метода. Console.WriteLine — это вызов статического метода класса Console из пространства System.",
            "Какая здесь ошибка?": "Убедитесь, что вы написали букву W и L в верхнем регистре (WriteLine). И не забудьте точку с запятой (;).",
            "Дай подсказку": 'Напишите внутри Main:\nConsole.WriteLine("Hello, C#!");'
        },
        2: {
            "Что такое ссылочные типы?": "Переменная 'string' в C# — это ссылочный тип. Сам текст хранится в Куче, а в Стек помещается ссылка на ячейку.",
            "Какая здесь ошибка?": "Проверьте типы: int для x и string для name. Строки пишутся в двойных кавычках.",
            "Дай подсказку": 'Напишите:\nint x = 42;\nstring name = "C#";'
        }
    },
    c: {
        1: {
            "Как устроен printf()?": "printf — это функция форматированного вывода из stdio.h. Она принимает строку формата и аргументы.",
            "Какая здесь ошибка?": "Всегда пишите директиву #include <stdio.h>, чтобы компилятор знал объявление printf.",
            "Дай подсказку": 'Напишите:\nprintf("Hello, C!");'
        },
        2: {
            "Как объявить строку в C?": "В языке C нет типа string. Строка создается как массив символов (массив char), заканчивающийся нулевым байтом '\\0'.",
            "Какая здесь ошибка?": 'Не забудьте квадратные скобки [] у переменной char name[] = "C";',
            "Дай подсказку": 'Напишите:\nint x = 42;\nchar name[] = "C";'
        }
    },
    java: {
        1: {
            "Что такое System.out?": "System — это класс, out — статический поток вывода типа PrintStream, а println — его метод.",
            "Какая здесь ошибка?": "В Java все чувствительно к регистру. System пишется с заглавной буквы.",
            "Дай подсказку": 'Напишите:\nSystem.out.println("Hello, Java!");'
        },
        2: {
            "Что такое String в Java?": "String — это встроенный класс, объекты которого хранятся в специальном String Pool в куче JVM для экономии памяти.",
            "Какая здесь ошибка?": "String пишется с большой буквы. int x пишется с маленькой.",
            "Дай подсказку": 'Напишите:\nint x = 42;\nString name = "Java";'
        }
    }
};

// ============================================================
// 10. STATE ENGINE
// ============================================================
let state = {
    activeLanguage: "python",
    languages: {
        python: { completedLessons: [], xp: 0, level: 1, savedCode: {} },
        cpp: { completedLessons: [], xp: 0, level: 1, savedCode: {} },
        csharp: { completedLessons: [], xp: 0, level: 1, savedCode: {} },
        c: { completedLessons: [], xp: 0, level: 1, savedCode: {} },
        java: { completedLessons: [], xp: 0, level: 1, savedCode: {} }
    },
    streak: 1,
    lastActiveDate: null,
    theme: "dark",
    quizCorrectTotal: 0,
    sprintWins: 0,
    flashcardsViewed: 0,
    unlockedAchievements: [],
    dailyProgress: { date: null, lessonsToday: 0, quizCorrectToday: 0, glossaryOpenedToday: 0 },
    questsCompleted: [],
    activityLog: {}
};

function loadState() {
    const saved = localStorage.getItem("devacademy_state_v2");
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            state = { ...state, ...parsed };
            // ensure all lang keys exist
            ["python","cpp","csharp","c","java"].forEach(l => {
                if (!state.languages[l]) state.languages[l] = { completedLessons: [], xp: 0, level: 1, savedCode: {} };
            });
        } catch(e) { console.error("State parse error:", e); }
    }
    // Streak check
    const today = new Date().toDateString();
    if (state.lastActiveDate && state.lastActiveDate !== today) {
        const last = new Date(state.lastActiveDate);
        const diff = Math.round((new Date(today) - last) / 86400000);
        state.streak = diff === 1 ? state.streak + 1 : 1;
    }
    state.lastActiveDate = today;
    // Reset daily progress if new day
    if (!state.dailyProgress || state.dailyProgress.date !== today) {
        state.dailyProgress = { date: today, lessonsToday: 0, quizCorrectToday: 0, glossaryOpenedToday: 0 };
    }
    // Apply saved theme
    if (state.theme) document.documentElement.setAttribute("data-theme", state.theme);
    saveState();
}

function saveState() {
    localStorage.setItem("devacademy_state_v2", JSON.stringify(state));
}

function getRankName(level, lang) {
    const langName = languagesData[lang].name;
    if (level < 5) return `Абсолютный новичок`;
    if (level < 10) return `Начинающий в ${langName}`;
    if (level < 25) return `${langName} Trainee`;
    if (level < 45) return `Junior ${langName} Dev`;
    if (level < 65) return `Strong Junior ${langName}`;
    if (level < 85) return `Middle ${langName} Dev`;
    if (level < 100) return `Lead ${langName} Architect`;
    return `Middle ${langName} Architect 🚀`;
}

function syncStateUI() {
    const langKey = state.activeLanguage;
    const langData = state.languages[langKey];
    const xpNeeded = 100;
    const currentLevel = Math.floor(langData.xp / xpNeeded) + 1;
    const xpInLevel = langData.xp % xpNeeded;
    const pct = (xpInLevel / xpNeeded) * 100;

    document.getElementById("current-xp").innerText = langData.xp;
    document.getElementById("next-level-xp").innerText = currentLevel * xpNeeded;
    document.getElementById("xp-progress-bar").style.width = `${pct}%`;
    document.getElementById("user-level").innerText = currentLevel;
    document.getElementById("user-rank").innerText = getRankName(currentLevel, langKey);
    document.getElementById("streak-count").innerText = state.streak;

    document.getElementById("stats-completed-lessons").innerText = `${langData.completedLessons.length} / 100`;
    document.getElementById("stats-total-xp").innerText = `${langData.xp} XP`;
    const pctCourse = Math.min(100, Math.round((langData.completedLessons.length / 100) * 100));
    document.getElementById("course-progress-fill").style.width = `${pctCourse}%`;
    document.getElementById("course-progress-percent").innerText = `${pctCourse}%`;

    document.getElementById("dashboard-main-title").innerText = `Карта обучения ${languagesData[langKey].name}`;
    document.getElementById("dashboard-sub-title").innerText = `Пройдите 100 интерактивных уроков для освоения языка ${languagesData[langKey].name} на уровне Middle.`;

    // Quests stat
    const done = state.questsCompleted.length;
    const total = questsData.daily.length + questsData.story.length;
    document.getElementById("stats-quests-done").innerText = `${done} / ${total}`;

    // Quests badge (if any daily quest completable)
    checkQuestsBadge();
}

function isLessonUnlocked(lessonId) {
    if (lessonId === 1) return true;
    return state.languages[state.activeLanguage].completedLessons.includes(lessonId - 1);
}

// ============================================================
// 11. DASHBOARD RENDERING
// ============================================================
let currentLesson = null;

function renderDashboard() {
    const container = document.getElementById("modules-list");
    container.innerHTML = "";
    const langKey = state.activeLanguage;
    const langObject = languagesData[langKey];
    const completedList = state.languages[langKey].completedLessons;

    langObject.modules.forEach((module) => {
        const completedInModule = module.lessons.filter(l => completedList.includes(l.id)).length;
        const isModuleUnlocked = isLessonUnlocked(module.lessons[0].id);

        const card = document.createElement("div");
        card.className = `module-card ${isModuleUnlocked ? 'unlocked' : 'locked'}`;
        card.id = `module-card-${module.id}`;

        card.innerHTML = `
            <div class="module-header" onclick="toggleModule(${module.id})">
                <div class="module-header-left">
                    <div class="module-badge">${module.id}</div>
                    <div class="module-info">
                        <h2>${module.title}</h2>
                        <div class="module-meta-info">
                            <span><i class="fa-solid fa-graduation-cap"></i> ${completedInModule} / ${module.lessons.length} Пройдено</span>
                            <span><i class="fa-solid fa-book-open"></i> Уроки ${module.lessons[0].id} - ${module.lessons[module.lessons.length - 1].id}</span>
                        </div>
                    </div>
                </div>
                <div class="module-header-right">
                    ${!isModuleUnlocked ? '<i class="fa-solid fa-lock" style="color: var(--text-muted);"></i>' : ''}
                    <i class="fa-solid fa-chevron-down chevron-icon"></i>
                </div>
            </div>
            <div class="module-lessons-panel" id="lessons-panel-${module.id}">
                <div class="lessons-list"></div>
            </div>
        `;

        const lessonsContainer = card.querySelector(".lessons-list");
        module.lessons.forEach(lesson => {
            const isCompleted = completedList.includes(lesson.id);
            const isUnlocked = isLessonUnlocked(lesson.id);
            let stateClass = "locked";
            let icon = '<i class="fa-solid fa-lock lesson-status-icon"></i>';

            if (isCompleted) {
                stateClass = "completed";
                icon = '<i class="fa-solid fa-circle-check lesson-status-icon"></i>';
            } else if (isUnlocked) {
                stateClass = "unlocked";
                icon = '<i class="fa-solid fa-circle-play lesson-status-icon"></i>';
            }

            const item = document.createElement("div");
            item.className = `lesson-item ${stateClass}`;
            if (isUnlocked) item.onclick = () => openLesson(lesson.id);

            item.innerHTML = `
                <div class="lesson-item-left">
                    <div class="lesson-num">${lesson.id}</div>
                    <span class="lesson-title">${lesson.title.split('. ')[1] || lesson.title}</span>
                </div>
                ${icon}
            `;
            lessonsContainer.appendChild(item);
        });
        container.appendChild(card);
    });
}

function toggleModule(id) {
    const card = document.getElementById(`module-card-${id}`);
    if (card.classList.contains("locked")) return;
    const panel = document.getElementById(`lessons-panel-${id}`);
    const isExpanded = card.classList.contains("expanded");

    document.querySelectorAll(".module-card").forEach(c => {
        if (c.id !== `module-card-${id}`) {
            c.classList.remove("expanded");
            const p = c.querySelector(".module-lessons-panel");
            if (p) p.style.maxHeight = null;
        }
    });

    if (isExpanded) {
        card.classList.remove("expanded");
        panel.style.maxHeight = null;
    } else {
        card.classList.add("expanded");
        panel.style.maxHeight = panel.scrollHeight + "px";
    }
}

// ============================================================
// 12. DASHBOARD TABS
// ============================================================
document.querySelectorAll(".dash-tab").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".dash-tab").forEach(b => b.classList.remove("active"));
        document.querySelectorAll(".dashtab-content").forEach(c => c.classList.remove("active"));
        btn.classList.add("active");
        const tab = btn.getAttribute("data-dashtab");
        document.getElementById(`dashtab-content-${tab}`).classList.add("active");
        if (tab === "quests") renderQuests();
        if (tab === "achievements") renderAchievements();
        if (tab === "flashcards") initFlashcards();
        if (tab === "codegame") initCodeGame();
    });
});

document.getElementById("stat-quests-card").addEventListener("click", () => {
    document.querySelectorAll(".dash-tab").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".dashtab-content").forEach(c => c.classList.remove("active"));
    document.getElementById("dashtab-quests").classList.add("active");
    document.getElementById("dashtab-content-quests").classList.add("active");
    renderQuests();
});

// ============================================================
// 13. LANGUAGE SWITCHER
// ============================================================
const switcherButtons = document.querySelectorAll("#language-switcher .lang-tab");
switcherButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        switcherButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const lang = btn.getAttribute("data-lang");
        state.activeLanguage = lang;
        saveState();
        currentLesson = null;
        document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
        document.getElementById("dashboard-screen").classList.add("active");
        syncStateUI();
        renderDashboard();
        // Reset to map tab
        document.querySelectorAll(".dash-tab").forEach(b => b.classList.remove("active"));
        document.querySelectorAll(".dashtab-content").forEach(c => c.classList.remove("active"));
        document.getElementById("dashtab-map").classList.add("active");
        document.getElementById("dashtab-content-map").classList.add("active");
    });
});

// ============================================================
// 14. CODE EDITOR
// ============================================================
const codeInput = document.getElementById("code-input");
const lineNumbers = document.getElementById("editor-line-numbers");

function updateLineNumbers() {
    const lines = codeInput.value.split('\n');
    lineNumbers.innerHTML = Array(lines.length).fill(0).map((_, i) => `<div>${i + 1}</div>`).join('');
}

codeInput.addEventListener('scroll', () => { lineNumbers.scrollTop = codeInput.scrollTop; });
codeInput.addEventListener('input', () => {
    updateLineNumbers();
    if (currentLesson) {
        state.languages[state.activeLanguage].savedCode[currentLesson.id] = codeInput.value;
        saveState();
    }
});

// Mobile tabs
document.querySelectorAll(".tab-button").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".tab-button").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const target = btn.getAttribute("data-tab");
        if (target === "theory") {
            document.getElementById("pane-theory").classList.add("active");
            document.getElementById("pane-editor").classList.remove("active");
        } else {
            document.getElementById("pane-theory").classList.remove("active");
            document.getElementById("pane-editor").classList.add("active");
            setTimeout(updateLineNumbers, 50);
        }
    });
});

// ============================================================
// 15. MEMORY VISUALIZER
// ============================================================
function updateMemoryVisualizer(lesson) {
    const stackCells = document.getElementById("stack-cells");
    const heapCells = document.getElementById("heap-cells");
    stackCells.innerHTML = "";
    heapCells.innerHTML = "";

    if (lesson.memory?.stack?.length > 0) {
        lesson.memory.stack.forEach(cell => {
            const el = document.createElement("div");
            el.className = `memory-cell ${(cell.val.includes("ref") || cell.val.includes("указатель")) ? 'pointer' : ''}`;
            el.innerHTML = `<div><span class="memory-cell-name">${cell.name}</span>: <span class="memory-cell-val">${cell.val}</span></div><span class="memory-cell-address">${cell.addr}</span>`;
            stackCells.appendChild(el);
        });
    } else {
        stackCells.innerHTML = `<div class="memory-empty-state">Нет локальных переменных в стеке</div>`;
    }

    if (lesson.memory?.heap?.length > 0) {
        lesson.memory.heap.forEach(cell => {
            const el = document.createElement("div");
            el.className = "memory-cell";
            el.innerHTML = `<div><span class="memory-cell-name">${cell.name}</span>: <span class="memory-cell-val">${cell.val}</span></div><span class="memory-cell-address">${cell.addr}</span>`;
            heapCells.appendChild(el);
        });
    } else {
        heapCells.innerHTML = `<div class="memory-empty-state">Куча пуста (Heap is empty)</div>`;
    }
}

// ============================================================
// 16. AI TUTOR
// ============================================================
function setupAITutor(lessonId) {
    const langKey = state.activeLanguage;
    const aiChatLogs = document.getElementById("ai-chat-logs");
    const aiChatOptions = document.getElementById("ai-chat-options");
    aiChatLogs.innerHTML = `<div class="ai-msg">Привет! Я твой ИИ-ассистент по языку ${languagesData[langKey].name}. Задавай мне вопросы по Уроку №${lessonId}!</div>`;
    aiChatOptions.innerHTML = "";

    const replies = aiTutorReplies[langKey]?.[lessonId];
    const questions = replies || {
        "Как выполнить задание?": "Напишите любое решение или комментарий длиной больше 5 символов.",
        "В чем разница в синтаксисе?": `Каждый язык имеет свои особенности: Python лаконичен, C/C++ требуют компиляции, Java/C# — объектно-ориентированные.`,
        "Дай готовую подсказку": "Просто напишите комментарий или любой код."
    };

    Object.keys(questions).forEach(question => {
        const btn = document.createElement("button");
        btn.className = "ai-opt-btn";
        btn.innerText = question;
        btn.onclick = () => askAITutor(question, questions[question]);
        aiChatOptions.appendChild(btn);
    });
}

function askAITutor(question, answer) {
    const aiChatLogs = document.getElementById("ai-chat-logs");
    const userBubble = document.createElement("div");
    userBubble.className = "user-msg";
    userBubble.innerText = question;
    aiChatLogs.appendChild(userBubble);
    aiChatLogs.scrollTop = aiChatLogs.scrollHeight;
    setTimeout(() => {
        const aiBubble = document.createElement("div");
        aiBubble.className = "ai-msg";
        aiBubble.innerText = answer;
        aiChatLogs.appendChild(aiBubble);
        aiChatLogs.scrollTop = aiChatLogs.scrollHeight;
    }, 400);
}

// ============================================================
// 17. HINTS SYSTEM
// ============================================================
let currentHintLevel = 0;

function setupHints(lesson) {
    currentHintLevel = 0;
    const hintDisplay = document.getElementById("hint-display");
    const dots = document.querySelectorAll(".hint-dot");
    hintDisplay.style.display = "none";
    hintDisplay.innerHTML = "";
    dots.forEach(d => d.classList.remove("used", "spent"));
}

document.getElementById("btn-hint").addEventListener("click", () => {
    if (!currentLesson || !currentLesson.hints) return;
    if (currentHintLevel >= currentLesson.hints.length) return;

    const hint = currentLesson.hints[currentHintLevel];
    const hintDisplay = document.getElementById("hint-display");
    const dot = document.getElementById(`hint-dot-${currentHintLevel + 1}`);

    // XP penalty for hints 2 and 3
    const xpPenalties = [0, 10, 25];
    const penalty = xpPenalties[currentHintLevel];
    if (penalty > 0) {
        const langData = state.languages[state.activeLanguage];
        langData.xp = Math.max(0, langData.xp - penalty);
        saveState();
        syncStateUI();
    }

    // Update dot
    if (dot) dot.classList.add("used");

    hintDisplay.style.display = "block";
    const penaltyText = penalty > 0 ? ` <span class="hint-penalty">(-${penalty} XP)</span>` : ' <span class="hint-free">(бесплатно)</span>';
    hintDisplay.innerHTML = `<div class="hint-level-badge">💡 Подсказка ${currentHintLevel + 1}${penaltyText}</div><p>${hint}</p>`;

    currentHintLevel++;
    if (currentHintLevel >= currentLesson.hints.length) {
        document.getElementById("btn-hint").disabled = true;
        document.getElementById("btn-hint").innerHTML = '<i class="fa-solid fa-lightbulb"></i> Нет подсказок';
    }
});

// ============================================================
// 18. OPEN LESSON
// ============================================================
function openLesson(lessonId) {
    const langKey = state.activeLanguage;
    const langObject = languagesData[langKey];
    let foundLesson = null, foundModule = null;

    for (const mod of langObject.modules) {
        const les = mod.lessons.find(l => l.id === lessonId);
        if (les) { foundLesson = les; foundModule = mod; break; }
    }
    if (!foundLesson) return;
    currentLesson = foundLesson;

    document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
    document.getElementById("lesson-screen").classList.add("active");

    document.getElementById("lesson-module-tag").innerText = foundModule.title;
    document.getElementById("lesson-header-title").innerText = foundLesson.title;
    document.getElementById("lesson-theory-text").innerHTML = foundLesson.theory;
    document.getElementById("lesson-task-text").innerHTML = foundLesson.task;

    // Activate glossary terms in theory
    activateGlossaryTerms();

    const fileTabs = {
        python: { name: "solution.py", icon: "fa-brands fa-python", color: "#38bdf8" },
        cpp: { name: "solution.cpp", icon: "fa-solid fa-code", color: "#60a5fa" },
        csharp: { name: "Solution.cs", icon: "fa-solid fa-code", color: "#c084fc" },
        c: { name: "solution.c", icon: "fa-solid fa-code", color: "#94a3b8" },
        java: { name: "Main.java", icon: "fa-brands fa-java", color: "#fb923c" }
    };
    const tab = fileTabs[langKey];
    document.getElementById("editor-filename-tab").innerHTML = `<i class="${tab.icon}" style="color: ${tab.color}"></i> ${tab.name}`;

    const savedCode = state.languages[langKey].savedCode[foundLesson.id];
    codeInput.value = savedCode !== undefined ? savedCode : foundLesson.boilerplate;

    document.getElementById("console-output").innerHTML = '<span class="console-placeholder">Ожидание запуска кода... Нажмите "Проверить решение" для тестирования вашего решения.</span>';

    setTimeout(updateLineNumbers, 50);
    setupAITutor(lessonId);
    setupHints(foundLesson);
    updateMemoryVisualizer(foundLesson);
    updateLessonNavigationButtons(lessonId);
    resetSprintMode();

    // Re-enable hint btn
    document.getElementById("btn-hint").disabled = false;
    document.getElementById("btn-hint").innerHTML = '<i class="fa-solid fa-lightbulb"></i> Подсказка';

    if (window.innerWidth < 768) {
        document.querySelector('.tab-button[data-tab="theory"]').click();
    }
}

function updateLessonNavigationButtons(lessonId) {
    const prevBtn = document.getElementById("btn-prev-lesson");
    const nextBtn = document.getElementById("btn-next-lesson");
    prevBtn.disabled = lessonId === 1;
    prevBtn.style.opacity = lessonId === 1 ? 0.5 : 1;
    if (lessonId > 1) prevBtn.onclick = () => openLesson(lessonId - 1);

    const canGoNext = lessonId < 100 && isLessonUnlocked(lessonId + 1);
    nextBtn.disabled = !canGoNext;
    nextBtn.style.opacity = canGoNext ? 1 : 0.5;
    if (canGoNext) nextBtn.onclick = () => openLesson(lessonId + 1);
}

// ============================================================
// 19. SPRINT MODE
// ============================================================
let sprintTimerInterval = null;
let sprintActive = false;
let sprintSeconds = 300;

function resetSprintMode() {
    clearInterval(sprintTimerInterval);
    sprintActive = false;
    sprintSeconds = 300;
    document.getElementById("sprint-timer-display").style.display = "none";
    document.getElementById("btn-sprint-mode").innerHTML = '<i class="fa-solid fa-bolt"></i> Спринт';
    document.getElementById("btn-sprint-mode").classList.remove("active");
}

document.getElementById("btn-sprint-mode").addEventListener("click", () => {
    if (sprintActive) return;
    sprintActive = true;
    sprintSeconds = 300;
    document.getElementById("sprint-timer-display").style.display = "flex";
    document.getElementById("btn-sprint-mode").innerHTML = '<i class="fa-solid fa-bolt"></i> Идёт...';
    document.getElementById("btn-sprint-mode").classList.add("active");

    sprintTimerInterval = setInterval(() => {
        sprintSeconds--;
        const m = Math.floor(sprintSeconds / 60);
        const s = sprintSeconds % 60;
        const timerEl = document.getElementById("sprint-timer-val");
        timerEl.textContent = `${m}:${s.toString().padStart(2, '0')}`;

        const pct = sprintSeconds / 300;
        if (pct > 0.5) timerEl.style.color = "var(--success)";
        else if (pct > 0.2) timerEl.style.color = "#f59e0b";
        else timerEl.style.color = "var(--error)";

        if (sprintSeconds <= 0) {
            clearInterval(sprintTimerInterval);
            sprintActive = false;
            document.getElementById("sprint-timer-val").textContent = "⏰ Время!";
        }
    }, 1000);
});

// ============================================================
// 20. VERIFY / RUN CODE
// ============================================================
const consoleOutput = document.getElementById("console-output");
document.getElementById("btn-run-verify").addEventListener("click", () => {
    if (!currentLesson) return;
    const userCode = codeInput.value;
    const langKey = state.activeLanguage;

    consoleOutput.innerHTML = `<div class="console-log info">> Запуск компилятора/интерпретатора ${languagesData[langKey].name}...</div>`;
    consoleOutput.innerHTML += `<div class="console-log info">> Проверка тестов: ${currentLesson.title}</div>`;

    setTimeout(() => {
        const result = currentLesson.validate(userCode);
        if (result.success) {
            consoleOutput.innerHTML += `<div class="console-log success"><i class="fa-solid fa-check"></i> ${result.message}</div>`;

            const langData = state.languages[langKey];
            const wasNew = !langData.completedLessons.includes(currentLesson.id);
            if (wasNew) {
                langData.completedLessons.push(currentLesson.id);
                const oldLevel = Math.floor(langData.xp / 100) + 1;

                // Sprint bonus
                let bonus = 100;
                if (sprintActive) {
                    bonus += 50;
                    state.sprintWins = (state.sprintWins || 0) + 1;
                    consoleOutput.innerHTML += `<div class="console-log success"><i class="fa-solid fa-bolt"></i> Бонус Спринта: +50 XP!</div>`;
                }
                langData.xp += bonus;
                const newLevel = Math.floor(langData.xp / 100) + 1;

                // Activity log
                const today = new Date().toDateString();
                state.activityLog[today] = (state.activityLog[today] || 0) + 1;
                state.dailyProgress.lessonsToday++;

                saveState();
                syncStateUI();

                if (newLevel > oldLevel) {
                    showLevelUpModal(newLevel);
                    triggerConfetti();
                }
                updateQuestProgress();
                checkAchievements();
            }
            updateLessonNavigationButtons(currentLesson.id);
            if (sprintActive) resetSprintMode();
        } else {
            consoleOutput.innerHTML += `<div class="console-log error"><i class="fa-solid fa-triangle-exclamation"></i> Тест провален: ${result.error}</div>`;
        }
        consoleOutput.scrollTop = consoleOutput.scrollHeight;
    }, 600);
});

document.getElementById("btn-reset-code").addEventListener("click", () => {
    if (currentLesson && confirm("Сбросить написанный код?")) {
        codeInput.value = currentLesson.boilerplate;
        state.languages[state.activeLanguage].savedCode[currentLesson.id] = currentLesson.boilerplate;
        saveState();
        updateLineNumbers();
    }
});

document.getElementById("btn-clear-console").addEventListener("click", () => {
    consoleOutput.innerHTML = '<span class="console-placeholder">Консоль очищена.</span>';
});

document.getElementById("btn-back-dashboard").addEventListener("click", () => {
    resetSprintMode();
    currentLesson = null;
    document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
    document.getElementById("dashboard-screen").classList.add("active");
    renderDashboard();
});

document.getElementById("btn-logo").addEventListener("click", () => {
    resetSprintMode();
    currentLesson = null;
    document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
    document.getElementById("dashboard-screen").classList.add("active");
    renderDashboard();
});

// ============================================================
// 21. CHEAT SHEET
// ============================================================
function renderCheatSheet(filter = "") {
    const langKey = state.activeLanguage;
    document.getElementById("cheat-language-name").innerText = languagesData[langKey].name;
    const cheatContentList = document.getElementById("cheat-content-list");
    cheatContentList.innerHTML = "";
    const items = (cheatSheets[langKey] || []).filter(item =>
        item.title.toLowerCase().includes(filter.toLowerCase()) ||
        item.desc.toLowerCase().includes(filter.toLowerCase())
    );
    if (!items.length) {
        cheatContentList.innerHTML = `<p style="color: var(--text-muted); text-align: center; margin-top: 2rem;">Ничего не найдено...</p>`;
        return;
    }
    items.forEach(item => {
        const card = document.createElement("div");
        card.className = "cheat-card";
        card.innerHTML = `<h4>${item.title}</h4><p>${item.desc}</p><pre><code>${item.code}</code></pre>`;
        cheatContentList.appendChild(card);
    });
}

document.getElementById("btn-toggle-cheat").addEventListener("click", () => {
    document.getElementById("cheat-sheet-drawer").classList.toggle("open");
    document.getElementById("glossary-drawer").classList.remove("open");
    renderCheatSheet();
});
document.getElementById("btn-close-cheat").addEventListener("click", () => {
    document.getElementById("cheat-sheet-drawer").classList.remove("open");
});
document.getElementById("cheat-search").addEventListener("input", (e) => renderCheatSheet(e.target.value));

// ============================================================
// 22. GLOSSARY
// ============================================================
function renderGlossary(filter = "", letterFilter = "") {
    const glossaryList = document.getElementById("glossary-content-list");
    glossaryList.innerHTML = "";

    let items = glossaryData.filter(item =>
        (filter === "" || item.term.toLowerCase().includes(filter.toLowerCase()) || item.def.toLowerCase().includes(filter.toLowerCase())) &&
        (letterFilter === "" || item.term.toLowerCase().startsWith(letterFilter.toLowerCase()))
    ).sort((a, b) => a.term.localeCompare(b.term, 'ru'));

    if (!items.length) {
        glossaryList.innerHTML = `<p style="color: var(--text-muted); text-align: center; margin-top: 2rem;">Ничего не найдено...</p>`;
        return;
    }

    items.forEach(item => {
        const card = document.createElement("div");
        card.className = "glossary-card";
        card.innerHTML = `
            <div class="glossary-term-title">${item.term}</div>
            <div class="glossary-def">${item.def}</div>
            ${item.example ? `<div class="glossary-example"><code>${item.example}</code></div>` : ''}
        `;
        glossaryList.appendChild(card);
    });
}

function renderGlossaryAlphabet() {
    const alphabetEl = document.getElementById("glossary-alphabet");
    const letters = [...new Set(glossaryData.map(t => t.term[0].toUpperCase()))].sort();
    alphabetEl.innerHTML = '';
    const allBtn = document.createElement("button");
    allBtn.className = "alpha-btn active";
    allBtn.textContent = "Все";
    allBtn.onclick = () => {
        document.querySelectorAll(".alpha-btn").forEach(b => b.classList.remove("active"));
        allBtn.classList.add("active");
        renderGlossary(document.getElementById("glossary-search").value, "");
    };
    alphabetEl.appendChild(allBtn);
    letters.forEach(letter => {
        const btn = document.createElement("button");
        btn.className = "alpha-btn";
        btn.textContent = letter;
        btn.onclick = () => {
            document.querySelectorAll(".alpha-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            renderGlossary(document.getElementById("glossary-search").value, letter);
        };
        alphabetEl.appendChild(btn);
    });
}

document.getElementById("btn-toggle-glossary").addEventListener("click", () => {
    const drawer = document.getElementById("glossary-drawer");
    drawer.classList.toggle("open");
    document.getElementById("cheat-sheet-drawer").classList.remove("open");
    if (drawer.classList.contains("open")) {
        renderGlossaryAlphabet();
        renderGlossary();
        state.dailyProgress.glossaryOpenedToday = 1;
        saveState();
        updateQuestProgress();
    }
});
document.getElementById("btn-close-glossary").addEventListener("click", () => {
    document.getElementById("glossary-drawer").classList.remove("open");
});
document.getElementById("glossary-search").addEventListener("input", (e) => {
    document.querySelectorAll(".alpha-btn").forEach(b => b.classList.remove("active"));
    document.querySelector(".alpha-btn")?.classList.add("active");
    renderGlossary(e.target.value, "");
});

// Glossary tooltip on terms in theory
function activateGlossaryTerms() {
    const tooltip = document.getElementById("glossary-tooltip");
    document.querySelectorAll(".glossary-term").forEach(el => {
        const termKey = el.getAttribute("data-term");
        const entry = glossaryData.find(g => g.term.toLowerCase() === termKey.toLowerCase());
        if (!entry) return;

        el.style.cursor = "pointer";
        el.addEventListener("mouseenter", (e) => {
            document.getElementById("tooltip-term").textContent = entry.term;
            document.getElementById("tooltip-def").textContent = entry.def;
            tooltip.style.display = "block";
            const rect = el.getBoundingClientRect();
            tooltip.style.top = (rect.bottom + window.scrollY + 8) + "px";
            tooltip.style.left = Math.min(rect.left + window.scrollX, window.innerWidth - 300) + "px";
        });
        el.addEventListener("mouseleave", () => {
            tooltip.style.display = "none";
        });
    });
}

// ============================================================
// 23. QUIZ
// ============================================================
let activeQuizIndex = 0;

function renderQuiz() {
    const questionEl = document.getElementById("quiz-question");
    const optionsContainer = document.getElementById("quiz-options");
    const feedbackEl = document.getElementById("quiz-feedback");
    feedbackEl.className = "quiz-feedback hidden";
    optionsContainer.innerHTML = "";
    activeQuizIndex = Math.floor(Math.random() * quizData.length);
    const quiz = quizData[activeQuizIndex];
    questionEl.innerText = quiz.q;
    quiz.options.forEach((opt, idx) => {
        const btn = document.createElement("button");
        btn.className = "quiz-option-btn";
        btn.innerText = opt;
        btn.onclick = () => selectQuizOption(idx);
        optionsContainer.appendChild(btn);
    });
}

function selectQuizOption(selectedIdx) {
    const quiz = quizData[activeQuizIndex];
    const buttons = document.querySelectorAll(".quiz-option-btn");
    const feedbackEl = document.getElementById("quiz-feedback");
    buttons.forEach(btn => btn.disabled = true);
    const langKey = state.activeLanguage;
    const langData = state.languages[langKey];

    if (selectedIdx === quiz.correct) {
        buttons[selectedIdx].classList.add("correct");
        feedbackEl.className = "quiz-feedback success";
        feedbackEl.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${quiz.feedback}`;
        langData.xp += 50;
        state.quizCorrectTotal = (state.quizCorrectTotal || 0) + 1;
        state.dailyProgress.quizCorrectToday++;
        const currentLevel = Math.floor(langData.xp / 100) + 1;
        saveState();
        syncStateUI();
        updateQuestProgress();
        checkAchievements();
        if (currentLevel > langData.level) {
            langData.level = currentLevel;
            showLevelUpModal(currentLevel);
            triggerConfetti();
        }
    } else {
        buttons[selectedIdx].classList.add("incorrect");
        buttons[quiz.correct].classList.add("correct");
        feedbackEl.className = "quiz-feedback error";
        feedbackEl.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> Неверно. Правильный ответ: ${quiz.options[quiz.correct]}`;
    }
    feedbackEl.classList.remove("hidden");
    setTimeout(renderQuiz, 6000);
}

// ============================================================
// 24. QUESTS
// ============================================================
function getQuestProgress(quest) {
    const s = state;
    switch (quest.trackKey) {
        case "lessonsToday": return s.dailyProgress.lessonsToday;
        case "quizCorrectToday": return s.dailyProgress.quizCorrectToday;
        case "glossaryOpenedToday": return s.dailyProgress.glossaryOpenedToday;
        case "totalCompleted": return getTotalCompleted(s);
        case "maxLangXP": return Math.max(...Object.keys(s.languages).map(l => s.languages[l].xp));
        case "langsStarted": return Object.keys(s.languages).filter(l => s.languages[l].completedLessons.length > 0).length;
        case "maxModuleCompleted": {
            let maxDone = 0;
            Object.keys(s.languages).forEach(l => {
                const done = s.languages[l].completedLessons.filter(id => id <= 10).length;
                if (done > maxDone) maxDone = done;
            });
            return maxDone;
        }
        default: return 0;
    }
}

function updateQuestProgress() {
    const allQuests = [...questsData.daily, ...questsData.story];
    allQuests.forEach(quest => {
        if (state.questsCompleted.includes(quest.id)) return;
        const progress = getQuestProgress(quest);
        if (progress >= quest.goal) {
            state.questsCompleted.push(quest.id);
            const langData = state.languages[state.activeLanguage];
            langData.xp += quest.reward;
            saveState();
            syncStateUI();
            showQuestCompleteToast(quest);
        }
    });
    checkQuestsBadge();
}

function checkQuestsBadge() {
    const allDaily = questsData.daily;
    const unfinished = allDaily.filter(q => {
        const prog = getQuestProgress(q);
        return prog < q.goal && !state.questsCompleted.includes(q.id);
    });
    const badge = document.getElementById("quests-badge");
    badge.style.display = unfinished.length > 0 ? "inline" : "none";
}

function renderQuests() {
    const board = document.getElementById("quests-board");
    board.innerHTML = `
        <div class="quests-section">
            <h3 class="quests-section-title"><i class="fa-solid fa-sun"></i> Ежедневные квесты</h3>
            <div class="quests-list" id="quests-daily-list"></div>
        </div>
        <div class="quests-section">
            <h3 class="quests-section-title"><i class="fa-solid fa-map-marked-alt"></i> Сюжетные квесты</h3>
            <div class="quests-list" id="quests-story-list"></div>
        </div>
    `;

    function renderQuestList(quests, containerId) {
        const container = document.getElementById(containerId);
        quests.forEach(quest => {
            const progress = getQuestProgress(quest);
            const isCompleted = state.questsCompleted.includes(quest.id);
            const pct = Math.min(100, Math.round((progress / quest.goal) * 100));
            const card = document.createElement("div");
            card.className = `quest-card ${isCompleted ? 'completed' : ''}`;
            card.innerHTML = `
                <div class="quest-icon">${quest.icon}</div>
                <div class="quest-info">
                    <div class="quest-title">${quest.title} ${isCompleted ? '<span class="quest-done-badge">✓ Выполнено</span>' : ''}</div>
                    <div class="quest-desc">${quest.desc}</div>
                    <div class="quest-progress-bar-bg">
                        <div class="quest-progress-bar-fill" style="width: ${pct}%"></div>
                    </div>
                    <div class="quest-progress-text">${Math.min(progress, quest.goal)} / ${quest.goal}</div>
                </div>
                <div class="quest-reward">+${quest.reward} XP</div>
            `;
            container.appendChild(card);
        });
    }

    renderQuestList(questsData.daily, "quests-daily-list");
    renderQuestList(questsData.story, "quests-story-list");
}

function showQuestCompleteToast(quest) {
    const toast = document.getElementById("achievement-toast");
    document.getElementById("achievement-toast-icon").textContent = quest.icon;
    document.getElementById("achievement-toast-name").textContent = `Квест выполнен: ${quest.title} (+${quest.reward} XP)`;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 4000);
}

// ============================================================
// 25. ACHIEVEMENTS
// ============================================================
function checkAchievements() {
    achievementsData.forEach(ach => {
        if (state.unlockedAchievements.includes(ach.id)) return;
        if (ach.condition(state)) {
            state.unlockedAchievements.push(ach.id);
            saveState();
            showAchievementToast(ach);
        }
    });
}

function showAchievementToast(ach) {
    const toast = document.getElementById("achievement-toast");
    document.getElementById("achievement-toast-icon").textContent = ach.icon;
    document.getElementById("achievement-toast-name").textContent = `Достижение: ${ach.title}`;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 4000);
}

function renderAchievements() {
    const grid = document.getElementById("achievements-grid");
    grid.innerHTML = "";
    achievementsData.forEach(ach => {
        const isUnlocked = state.unlockedAchievements.includes(ach.id);
        const card = document.createElement("div");
        card.className = `achievement-card ${isUnlocked ? 'unlocked' : 'locked'}`;
        card.title = isUnlocked ? ach.desc : `🔒 ${ach.desc}`;
        card.innerHTML = `
            <div class="achievement-icon">${isUnlocked ? ach.icon : '🔒'}</div>
            <div class="achievement-title">${ach.title}</div>
            <div class="achievement-desc">${ach.desc}</div>
        `;
        grid.appendChild(card);
    });
}

// ============================================================
// 26. FLASHCARDS
// ============================================================
let fcIndex = 0;
let fcCards = [];
let fcKnow = 0;
let fcRepeat = 0;

function initFlashcards() {
    const lang = document.getElementById("flashcard-lang-select").value;
    fcCards = [...(flashcardsData[lang] || [])];
    fcKnow = 0; fcRepeat = 0;
    fcIndex = 0;
    document.getElementById("fc-know-count").textContent = 0;
    document.getElementById("fc-repeat-count").textContent = 0;
    document.getElementById("flashcard-element").classList.remove("flipped");
    showFlashcard();
}

function showFlashcard() {
    if (fcCards.length === 0) {
        document.getElementById("fc-front-text").textContent = "Карточки закончились! Обновите или переключите язык.";
        document.getElementById("fc-back-text").textContent = "";
        document.getElementById("fc-current").textContent = "—";
        document.getElementById("fc-total").textContent = "—";
        return;
    }
    const card = fcCards[fcIndex % fcCards.length];
    document.getElementById("fc-front-text").textContent = card.q;
    document.getElementById("fc-back-text").textContent = card.a;
    document.getElementById("fc-current").textContent = (fcIndex % fcCards.length) + 1;
    document.getElementById("fc-total").textContent = fcCards.length;
    document.getElementById("flashcard-element").classList.remove("flipped");

    state.flashcardsViewed = (state.flashcardsViewed || 0) + 1;
    saveState();
    checkAchievements();
}

document.getElementById("flashcard-element").addEventListener("click", () => {
    document.getElementById("flashcard-element").classList.toggle("flipped");
});

document.getElementById("btn-fc-know").addEventListener("click", () => {
    fcKnow++;
    document.getElementById("fc-know-count").textContent = fcKnow;
    fcCards.splice(fcIndex % fcCards.length, 1);
    if (fcCards.length === 0) { showFlashcard(); return; }
    fcIndex = fcIndex % fcCards.length;
    showFlashcard();
});

document.getElementById("btn-fc-repeat").addEventListener("click", () => {
    fcRepeat++;
    document.getElementById("fc-repeat-count").textContent = fcRepeat;
    fcIndex = (fcIndex + 1) % fcCards.length;
    showFlashcard();
});

document.getElementById("flashcard-lang-select").addEventListener("change", initFlashcards);

// ============================================================
// 27. CODE OR NOT GAME
// ============================================================
let cgCurrentQuestion = null;
let cgScore = 0;
let cgStreak = 0;
let cgTimerInterval = null;
let cgTimeLeft = 5;
let cgGameActive = false;

function initCodeGame() {
    cgScore = 0; cgStreak = 0;
    document.getElementById("cg-score").textContent = 0;
    document.getElementById("cg-streak").textContent = 0;
    document.getElementById("cg-feedback").textContent = "";
    document.getElementById("btn-cg-start").style.display = "inline-flex";
    document.querySelectorAll(".codegame-answer-btn").forEach(b => b.disabled = true);
}

function startCodeGame() {
    cgGameActive = true;
    document.getElementById("btn-cg-start").style.display = "none";
    document.querySelectorAll(".codegame-answer-btn").forEach(b => b.disabled = false);
    nextCodeQuestion();
}

function nextCodeQuestion() {
    clearInterval(cgTimerInterval);
    if (!cgGameActive) return;
    cgCurrentQuestion = codeOrNotData[Math.floor(Math.random() * codeOrNotData.length)];
    document.getElementById("cg-code-display").textContent = cgCurrentQuestion.code;
    document.getElementById("cg-lang-badge").textContent = cgCurrentQuestion.lang;
    document.getElementById("cg-feedback").textContent = "";
    document.getElementById("cg-feedback").className = "codegame-feedback";
    document.querySelectorAll(".codegame-answer-btn").forEach(b => b.disabled = false);

    cgTimeLeft = 5;
    updateTimerRing(5, 5);
    document.getElementById("cg-timer").textContent = 5;

    cgTimerInterval = setInterval(() => {
        cgTimeLeft--;
        document.getElementById("cg-timer").textContent = cgTimeLeft;
        updateTimerRing(cgTimeLeft, 5);
        if (cgTimeLeft <= 0) {
            clearInterval(cgTimerInterval);
            timeOutCodeGame();
        }
    }, 1000);
}

function updateTimerRing(current, max) {
    const circumference = 150.8;
    const ring = document.getElementById("cg-timer-ring");
    const offset = circumference * (1 - current / max);
    ring.style.strokeDashoffset = offset;
    const hue = Math.round((current / max) * 120);
    ring.style.stroke = `hsl(${hue}, 80%, 55%)`;
}

function answerCodeGame(userSaysValid) {
    if (!cgCurrentQuestion || !cgGameActive) return;
    clearInterval(cgTimerInterval);
    const correct = userSaysValid === cgCurrentQuestion.isValid;
    const speedBonus = Math.max(0, cgTimeLeft - 1);

    document.querySelectorAll(".codegame-answer-btn").forEach(b => b.disabled = true);

    if (correct) {
        cgScore += 10 + speedBonus;
        cgStreak++;
        document.getElementById("cg-score").textContent = cgScore;
        document.getElementById("cg-streak").textContent = cgStreak;
        document.getElementById("cg-feedback").textContent = `✅ Верно! +${10 + speedBonus} очков (скорость +${speedBonus})`;
        document.getElementById("cg-feedback").className = "codegame-feedback success";
        if (speedBonus > 0) {
            const langData = state.languages[state.activeLanguage];
            langData.xp += 10;
            saveState();
            syncStateUI();
        }
    } else {
        cgStreak = 0;
        document.getElementById("cg-streak").textContent = 0;
        document.getElementById("cg-feedback").textContent = `❌ Неверно! Это был ${cgCurrentQuestion.isValid ? 'ВЕРНЫЙ' : 'НЕВЕРНЫЙ'} код.`;
        document.getElementById("cg-feedback").className = "codegame-feedback error";
    }
    setTimeout(nextCodeQuestion, 2000);
}

function timeOutCodeGame() {
    cgStreak = 0;
    document.getElementById("cg-streak").textContent = 0;
    document.getElementById("cg-feedback").textContent = `⏰ Время вышло! Это был ${cgCurrentQuestion.isValid ? 'ВЕРНЫЙ' : 'НЕВЕРНЫЙ'} код.`;
    document.getElementById("cg-feedback").className = "codegame-feedback error";
    document.querySelectorAll(".codegame-answer-btn").forEach(b => b.disabled = true);
    setTimeout(nextCodeQuestion, 2500);
}

document.getElementById("btn-cg-start").addEventListener("click", startCodeGame);
document.getElementById("btn-cg-correct").addEventListener("click", () => answerCodeGame(true));
document.getElementById("btn-cg-wrong").addEventListener("click", () => answerCodeGame(false));

// ============================================================
// 28. PROFILE & STATS
// ============================================================
document.getElementById("btn-profile").addEventListener("click", () => {
    const modal = document.getElementById("profile-modal");
    modal.classList.add("open");
    renderProfile();
});

document.getElementById("btn-close-profile").addEventListener("click", () => {
    document.getElementById("profile-modal").classList.remove("open");
});

document.getElementById("profile-modal").addEventListener("click", (e) => {
    if (e.target === document.getElementById("profile-modal")) {
        document.getElementById("profile-modal").classList.remove("open");
    }
});

function renderProfile() {
    const langKey = state.activeLanguage;
    document.getElementById("profile-rank-display").textContent = getRankName(Math.floor(state.languages[langKey].xp / 100) + 1, langKey);

    // Stats grid
    const statsGrid = document.getElementById("profile-stats-grid");
    const totalXP = getTotalXP(state);
    const totalLessons = getTotalCompleted(state);
    statsGrid.innerHTML = `
        <div class="pstat-card"><div class="pstat-val">${totalLessons}</div><div class="pstat-lbl">Уроков всего</div></div>
        <div class="pstat-card"><div class="pstat-val">${totalXP}</div><div class="pstat-lbl">Общий XP</div></div>
        <div class="pstat-card"><div class="pstat-val">${state.streak}</div><div class="pstat-lbl">🔥 Стрик</div></div>
        <div class="pstat-card"><div class="pstat-val">${state.unlockedAchievements.length}</div><div class="pstat-lbl">Достижений</div></div>
        <div class="pstat-card"><div class="pstat-val">${state.questsCompleted.length}</div><div class="pstat-lbl">Квестов</div></div>
        <div class="pstat-card"><div class="pstat-val">${state.quizCorrectTotal || 0}</div><div class="pstat-lbl">Квиз ✓</div></div>
    `;

    // Radar chart
    drawRadarChart();

    // Heatmap
    renderHeatmap();
}

function drawRadarChart() {
    const canvas = document.getElementById("profile-radar");
    const ctx = canvas.getContext("2d");
    const cx = 140, cy = 140, r = 110;
    const langs = ["python", "cpp", "csharp", "c", "java"];
    const labels = ["Python", "C++", "C#", "C", "Java"];
    const values = langs.map(l => Math.min(1, state.languages[l].completedLessons.length / 100));
    const n = langs.length;

    ctx.clearRect(0, 0, 280, 280);

    // Draw grid circles
    for (let i = 1; i <= 5; i++) {
        ctx.beginPath();
        for (let j = 0; j < n; j++) {
            const angle = (j * 2 * Math.PI / n) - Math.PI / 2;
            const pr = (r * i) / 5;
            const x = cx + pr * Math.cos(angle);
            const y = cy + pr * Math.sin(angle);
            j === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.strokeStyle = "rgba(255,255,255,0.08)";
        ctx.lineWidth = 1;
        ctx.stroke();
    }

    // Draw axes
    for (let j = 0; j < n; j++) {
        const angle = (j * 2 * Math.PI / n) - Math.PI / 2;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + r * Math.cos(angle), cy + r * Math.sin(angle));
        ctx.strokeStyle = "rgba(255,255,255,0.12)";
        ctx.lineWidth = 1;
        ctx.stroke();
    }

    // Draw data polygon
    ctx.beginPath();
    for (let j = 0; j < n; j++) {
        const angle = (j * 2 * Math.PI / n) - Math.PI / 2;
        const pr = r * (values[j] || 0.02);
        const x = cx + pr * Math.cos(angle);
        const y = cy + pr * Math.sin(angle);
        j === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fillStyle = "rgba(99, 102, 241, 0.3)";
    ctx.fill();
    ctx.strokeStyle = "rgba(99, 102, 241, 0.9)";
    ctx.lineWidth = 2;
    ctx.stroke();

    // Draw points and labels
    for (let j = 0; j < n; j++) {
        const angle = (j * 2 * Math.PI / n) - Math.PI / 2;
        const pr = r * (values[j] || 0.02);
        const x = cx + pr * Math.cos(angle);
        const y = cy + pr * Math.sin(angle);
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, 2 * Math.PI);
        ctx.fillStyle = "#6366f1";
        ctx.fill();

        const lx = cx + (r + 18) * Math.cos(angle);
        const ly = cy + (r + 18) * Math.sin(angle);
        ctx.font = "bold 12px 'Outfit', sans-serif";
        ctx.fillStyle = "rgba(255,255,255,0.8)";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(labels[j], lx, ly);
    }
}

function renderHeatmap() {
    const grid = document.getElementById("heatmap-grid");
    grid.innerHTML = "";
    const today = new Date();
    const days = 84; // 12 weeks × 7
    for (let i = days - 1; i >= 0; i--) {
        const d = new Date(today);
        d.setDate(d.getDate() - i);
        const key = d.toDateString();
        const count = state.activityLog[key] || 0;
        const sq = document.createElement("div");
        sq.className = `hm-sq hm-${Math.min(4, count)}`;
        sq.title = `${key}: ${count} уроков`;
        grid.appendChild(sq);
    }
}

// ============================================================
// 29. THEME TOGGLE
// ============================================================
document.getElementById("btn-theme-toggle").addEventListener("click", () => {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    const newTheme = isDark ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    document.getElementById("theme-icon").className = isDark ? "fa-solid fa-sun" : "fa-solid fa-moon";
    state.theme = newTheme;
    saveState();
});

// ============================================================
// 30. LEVEL UP MODAL
// ============================================================
function showLevelUpModal(level) {
    const langKey = state.activeLanguage;
    document.getElementById("modal-level-val").innerText = level;
    document.getElementById("modal-rank-val").innerText = getRankName(level, langKey);
    document.getElementById("levelup-modal").classList.add("open");
}

document.getElementById("btn-close-levelup").addEventListener("click", () => {
    document.getElementById("levelup-modal").classList.remove("open");
});

// ============================================================
// 31. CONFETTI
// ============================================================
const canvas = document.getElementById("confetti-canvas");
const ctx = canvas.getContext("2d");
let confettiParticles = [];
let animationFrameId = null;

function resizeCanvas() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

class Confetti {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * -canvas.height - 20;
        this.size = Math.random() * 8 + 6;
        this.speedY = Math.random() * 4 + 4;
        this.speedX = Math.random() * 4 - 2;
        this.rotation = Math.random() * 360;
        this.rotationSpeed = Math.random() * 4 - 2;
        this.color = `hsl(${Math.random() * 360}, 80%, 60%)`;
    }
    update() { this.y += this.speedY; this.x += this.speedX; this.rotation += this.rotationSpeed; }
    draw() {
        ctx.save();
        ctx.translate(this.x + this.size / 2, this.y + this.size / 2);
        ctx.rotate((this.rotation * Math.PI) / 180);
        ctx.fillStyle = this.color;
        ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
        ctx.restore();
    }
}

function triggerConfetti() {
    confettiParticles = [];
    for (let i = 0; i < 150; i++) confettiParticles.push(new Confetti());
    if (animationFrameId) cancelAnimationFrame(animationFrameId);
    animateConfetti();
}

function animateConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let active = false;
    confettiParticles.forEach(p => { p.update(); p.draw(); if (p.y < canvas.height) active = true; });
    if (active) animationFrameId = requestAnimationFrame(animateConfetti);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// ============================================================
// 32. INITIALIZATION
// ============================================================
window.addEventListener("DOMContentLoaded", () => {
    loadState();
    syncStateUI();
    renderDashboard();
    renderQuiz();
    checkAchievements();
    updateQuestProgress();

    // Theme icon
    const isDark = state.theme === "dark";
    document.getElementById("theme-icon").className = isDark ? "fa-solid fa-moon" : "fa-solid fa-sun";
    document.documentElement.setAttribute("data-theme", state.theme || "dark");

    // Set active language tab
    switcherButtons.forEach(btn => {
        btn.classList.toggle("active", btn.getAttribute("data-lang") === state.activeLanguage);
    });
});
