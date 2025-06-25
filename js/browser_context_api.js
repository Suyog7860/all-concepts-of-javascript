// Browser Context API ka मतलब ब्राउज़र हमें कुछ ऐसे टूल्स 
// (जैसे window, document, localStorage) देता है जिससे हम वेबपेज के
// content को control कर सकते हैं, user की info access कर सकते हैं, 
// और वेबसाइट को interactive बना सकते हैं।

// stack
// first In, Last out → जो सबसे पहले डाला गया, वही सबसे अंत निकलेगा।
// Last In, First Out → जो सबसे अंत में डाला गया, वही सबसे पहले निकलेगा।

// Heap memory
// Heap Memory वो जगह होती है जहाँ पर javascript में complex चीज़ें जैसे objects,
//  arrays, functions को run time पर store किया जाता है।

// 🧳 जैसे अगर आप एक बैग ले जा रहे हो जिसमें आप जब चाहो कुछ डाल सकते हो 
// और निकाल सकते हो — यही Heap है।

// jitne bhi variables ya data hum banate hain unhe store kahi to karna 
// padta hain uske liye Heap Memory use hota hain

// example
//  1 + 2 + 3 + 4 + 5
//  browser did calculation like this
//  step 1] : 1 + 2 = 3 // jab tak browser step 2 ka calculation kar raha hoga tab tak step 1 ki value jaha par store ki jati hain use hum heap memory kahte hain
//  step 2] : 3 + 3 = 6 
//  step 3] : 6 + 4 = 10
//  step 4] : 10 + 5 = 15