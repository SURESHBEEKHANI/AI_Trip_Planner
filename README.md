# AI-Based Trip Planner Agent

A smart, extensible agent for planning trips using AI. This project aims to help users organize their travel by providing real-time information, cost estimates, and itinerary suggestions.

## Features
- **Real-Time Weather:** Get up-to-date weather forecasts for your destinations.
- **Attractions & Activities:** Discover popular attractions and activities.
- **Hotel Cost:** Estimate accommodation expenses.
- **Currency Conversion:** Convert currencies with real-time rates.
- **Itinerary Planning:** Generate optimized travel itineraries.
- **Total Expense:** Calculate the total estimated cost of your trip.
- **Trip Summary:** Receive a comprehensive summary of your planned trip.

## Environment Setup with uv

To set up your environment using [uv](https://github.com/astral-sh/uv), follow these steps:

```python
import shutil
print(shutil.which("uv"))
```

Install uv:
```bash
pip install uv
```

Initialize your project:
```bash
uv init AI_Travel_Planner
```

List installed pip packages:
```bash
uv pip list
```

List installed Python versions:
```bash
uv python list
```

Install a specific Python version (example for Windows):
```bash
uv python install ypy-3.10.16-windows-x86_64-none
```

List Python versions again to confirm:
```bash
uv python list
```

Create a virtual environment with a specific Python version:
```bash
uv venv env --python cpython-3.10.18-windows-x86_64-none
```

Add dependencies (example: pandas):
```bash
uv add pandas
```

# If you have conda, deactivate it first:
```bash
conda deactivate
```

# Create the virtual environment again if needed:
```bash
uv venv env --python cpython-3.10.18-windows-x86_64-none
```

## Activate your virtual environment (Windows example):
```bash
C:\Users\suresh\AI_Trip_Planner\env\Scripts\activate.bat
```

## Installation
```bash
# Requires Python 3.13 or higher
uv add  -r requirements.txt
```

## Usage
```bash
python main.py
```

## Contributing
Contributions are welcome! Please open issues or submit pull requests for improvements.

## License
[MIT](LICENSE)